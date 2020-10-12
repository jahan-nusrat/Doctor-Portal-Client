const { APPOINT_DATE, LOGIN_USER } = require("./action")

const initialState={
    selectDate: '',
    loginInfo: {}
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case APPOINT_DATE:
            return{
                ...state,
                selectDate: action.payload
            }
        case LOGIN_USER:
            return {
                ...state,
                loginInfo: action.payload
            }
        default:
            return state;
    }
}

export default reducer;