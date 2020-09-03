const initialState = {
    user: {}
}

//THESE ACTION TYPE THINGYS
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'


//ACTION BUILDERS
export function loginUser(user){
    return{
        type: LOGIN_USER,
        payload: user
    }
}
export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: initialState
    }
}


export default function Reducer(state = initialState, action){
    const {type, payload} = action;

        switch(type){
            case LOGIN_USER:
                return { ...state, user: payload }
            case LOGOUT_USER:
                return { ...state, user: payload }
        }
}