import {useSelector, useDispatch} from 'react-redux'
import './../App.css'
import { decrementCounterAction, incrementCounterAction, resetCounterAction } from '../actions/counterAction';

function ReduxExample() {
  // 4 Access data from store
  const data = useSelector((state) => state.counter)
  // 5 set data in store using dispatch
  const dispatchCounter = useDispatch();

  return (
    <>
      <h1>Redux Example</h1>
      <div className='card'>
        <h3>Counter: {data}</h3>
        <button onClick={() => dispatchCounter(incrementCounterAction())}>Increment</button>
        <button onClick={() => dispatchCounter(decrementCounterAction())}>Decrement</button>
        <button onClick={() => dispatchCounter(resetCounterAction())}>Reset</button>
      </div>
    </>
  )
}

export default ReduxExample
