import React from 'react'

const LoginForm = () => {
    const handleGoogleSignIn = () => {
        console.log('I am clicked')
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
                            <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
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
