import './App.css';
import React, {useReducer} from 'react'

const reducer = (counter, {type, payload}) => {
  switch(type){
    case "INCREMENT": {
      return counter  + payload;
    }
    case "DECREMENT": {
      return counter - payload;
    }
    default: {
      return counter;
    }
  }
}

function App() {
  const [counter, dispatch] = useReducer(reducer, 0)
  // need a state variable with initial value = 0
  // need a single place where this state changess can be monitored
  
  return (
    <div className="App">
      Counter: {counter}
      <div>
        <button onClick={()=> dispatch({type: "DECREMENT", payload: 25})}>-</button>
        <button onClick={()=> dispatch({type: "INCREMENT", payload: 100})}>+</button>
      </div>
    </div>
  );
}

export default App;
