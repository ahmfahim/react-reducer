import React,{useReducer, useState} from 'react';

const initialState = {count: 0}
const reducer =(state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return{count:state.count + 1}
        case 'DECREMENT':
            return { count: state.count - 1 }
        default:
            return state;
    }
}

const ReducerCount = () => {
    const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Reducer Count: {state.count}</h1>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Increase</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>decrease</button>
        </div>
    );
};

export default ReducerCount;