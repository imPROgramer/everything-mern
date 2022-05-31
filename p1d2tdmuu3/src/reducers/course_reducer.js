export default function(state={}, action){
    switch(action.type){
        case 'GET_COURSES':
            return{...state,topics:action.payload}
        case 'POST_COURSES':
            return{...state,article:action.payload}
        default:
            return state
    }
}