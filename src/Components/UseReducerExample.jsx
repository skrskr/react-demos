import { useReducer } from 'react'
import './../App.css'

import TestReducer from '../reducers/testReducer'

const intialValue = {
  counter: 0
}


function UseReducerExample() {
  // const [counter, setCounter] = useState(0)
  const [state, dispatch] = useReducer(TestReducer, intialValue)

  return (
    <>
      <h1>Use Reducer Example</h1>
      <div className='card'>
        value is {state.counter}
        <button onClick={() => dispatch({ 'type': 'decrement' })}>-</button>
        <button onClick={() => dispatch({ 'type': 'increment' })}>+</button>
        <button onClick={() => dispatch({ 'type': 'reset' })}>reset</button>
      </div>
    </>
  )
}

export default UseReducerExample
