import React, {useReducer} from 'react';
const ACTIONS={
    increment:"increment",
    decrement:"decrement",
    multiply:"multiply",
    divide:"divide"
    
}

function reducerfunction(state,action){
    switch(action.type){
        case ACTIONS.increment:
            return{count:state.count+1}
        case ACTIONS.decrement:
            return{count:state.count-1}
        case ACTIONS.multiply:
            return{count:state.count*2}
        case ACTIONS.divide:
            return{count:state.count/2}
    }
}
export const Usereducer3 = () => {
  const [state,dispatch] = useReducer(reducerfunction,{count:55});
  
  function increment(){
    dispatch({type:"increment"})
  };

  function decrement(){
    dispatch({type:"decrement"})
  };
  function multiply(){
    dispatch({type:"multiply"})
  };
  function divide(){
    dispatch({type:"divide"})
  };

  return (
    <div>
      <h1>{state.count}</h1>
      
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={divide}>/</button>
    </div>
  );
};
