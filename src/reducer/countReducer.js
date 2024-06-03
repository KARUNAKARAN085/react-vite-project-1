export const initialSate = {
    count: 0
}

export const countReducer = (state,action) =>{
    console.log(state)
    console.log(action)
    switch (action.type){
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        default:
            return state;
    }
}