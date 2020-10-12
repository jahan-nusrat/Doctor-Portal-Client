import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loggedInUser } from '../redux/action';
import firebaseConfig from './firebase.config';

const LoginForm = () => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const { from } = location.state || { from: { pathname: "/" } };
    var provider = new firebase.auth.GoogleAuthProvider();

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signInUser = { name: displayName, email }
            dispatch(loggedInUser(signInUser));
            storeAuthToken()
        }).catch(function (error) {
            alert(error.message)
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                alert(error.message)
            });
    }

    return (
        <div>
            <div className="login-page container">
                <div className="row align-items-center" style={{ height: "100vh" }}>
                    <div className="col-md-6 shadow p-5">
                        <div className="form-group">
                            <label htmlFor="">User Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-danger">Forgot your password?</label>
                        </div>
                        <div className="from-group mt-5">
                            <button className="btn btn-info w-100" onClick={handleGoogleSignIn}>Google Sign in</button>
                        </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block align-self-end">
                        <img className="img-fluid" src="https://i.ibb.co/nQ0sZVq/Group-140.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
