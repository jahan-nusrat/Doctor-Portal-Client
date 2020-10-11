const { APPOINT_DATE } = require("./action")

const initialState={
    selectDate:''
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case APPOINT_DATE:
            return{
                ...state,
                selectDate: action.payload
            }
        default:
            return state;
    }
}

export default reducer;