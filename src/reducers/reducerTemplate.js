

const initialState = {
    counter: 0
}


//every reducer state and action are passed in 
//purpose of reducer is to return a new global state
//reducer must be passed into STORE
const reducerTemplate = (state = initialState, action) => {

    switch(action.type){
        case "INCREMENT": //this name has to be the same as the action.type in ACTIONS
            return {
                ...state,
                counter: state.counter + action.data
            }
            default:
                return state;
    }
}

export default reducerTemplate;