const initialState = {
    loginUser : null
};

export default function LoginReducer(state=initialState, action){
 
    let updatedUser = state.loginUser;
    switch(action.type || action.type){
        case 'Login': 
            //Hooks ile parametre bu şekilde geliyor
            if(action.loginUser!=undefined) { updatedUser=action.loginUser; }
            else  { updatedUser=action.payload;}
            
            return {
                ...state,
                loginUser: updatedUser
            };
            break;
        case 'Logout':
            return {
                ...state,
                loginUser: null
            };
            break;
        default:
            return state;
            break;
    }
}