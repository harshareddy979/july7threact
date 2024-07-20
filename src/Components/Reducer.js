export var initialState={
    "username":"",
    "password":""
}

// action:{
//     "type":"VALUES",
//     "username":"",
//     "password":""
// }

export function ValuesReducer(state,action){
        if(action.type === "VALUES"){
            initialState={...initialState,
                username:action.username,
                password:action.password}
            return initialState;
        }else{
            return initialState;
        }
}
