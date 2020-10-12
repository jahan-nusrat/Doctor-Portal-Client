export const APPOINT_DATE='APPOINT_DATE';
export const LOGIN_USER = 'LOGIN_USER';

export const selectedAppointDate=(date)=>{
    return{
        type    : APPOINT_DATE,
        payload : date
    }
}

export const loggedInUser = (info) => {
    return {
        type: LOGIN_USER,
        payload: info
    };
};