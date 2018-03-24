const initState = [];

const widget = (state = initState, action) => {
    if(action.type === 'ADD'){
        return [
            ...state,
            action.buy
        ]
    } else if(action.type === 'SORT'){
        return action.buy
    } 
    return state;
}

export default widget;