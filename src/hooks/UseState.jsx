import react, {useState, useReducer} from "react";

const reducer = (state, action) => {
    
    if (action.t === "+") {
        console.log('action ',action, state);
        return state + 1; 
    }else if (action.t === "-") {
        return state - 1;
    }
}

const UseState = () => {
    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, 0);
    return(
        <div>
        <p> hi i am usestate hook </p>
        <p>count: {count}</p>
        <button onClick={()=>dispatch({t: "-"})}>-</button>
        <button onClick={()=>dispatch({t: "+"})}>+</button>
        </div>
    )
}

export default UseState