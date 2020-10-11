export const APPOINT_DATE='APPOINT_DATE';

export const selectedAppointDate=(date)=>{
    return{
        type    : APPOINT_DATE,
        payload : date
    }
}