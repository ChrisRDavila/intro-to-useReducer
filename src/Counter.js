import React, { useState, useEffect, useReducer } from 'react';

const initialState = {
  counter: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { 
        counter: state.counter + 1
      };
      case 'decrement':
        return { 
          counter: state.counter - 1
        };
        case 'reset':
          return { 
            counter: 0
          };
      default:
        throw new Error(`There is no action type matching ${action.type}.`);
  }
}  


function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.title = state.counter;
  }, [state.counter]);

  return (
    <React.Fragment>
      {hidden ? <h1>Count Hidden</h1> : <h1>{state.counter}</h1>}
      <button onClick={() => dispatch({type: 'increment'})}>Add Count!</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Subtract Count!</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset Count!</button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
    </React.Fragment>
  );
}

export default Counter;