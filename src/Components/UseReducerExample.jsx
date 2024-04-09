import {useReducer, useState } from 'react'
import './../App.css'

const intialValue = {
  counter: 0
}

const reducer = (state, action) => {

  switch (action.type) {
    case 'increment':
      return {counter: state.counter + 1}
    case 'decrement':
      return {counter: state.counter - 1}
    case 'reset':
      return {counter: 0}
    default:
      return state
  }
}


function UseReducerExample() {
  // const [counter, setCounter] = useState(0)
  const [state, dispatch] = useReducer(reducer,intialValue)

  return (
    <>
      <h1>Use Reducer Example</h1>
      <div className='card'>
        value is {state.counter}
        <button onClick={() => dispatch({'type': 'decrement'})}>-</button>
        <button onClick={() => dispatch({'type': 'increment'})}>+</button>
        <button onClick={() => dispatch({'type': 'reset'})}>reset</button>
      </div>
    </>
  )
}

export default UseReducerExample
