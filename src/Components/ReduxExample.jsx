import {useSelector, useDispatch} from 'react-redux'
import './../App.css'
import { decrementCounterAction, incrementCounterAction, resetCounterAction } from '../actions/counterAction';
import BackToHome from './BackToHome';
import { setLoginAction, setLogoutAction } from '../actions/authAction';

function ReduxExample() {
  // 4 Access data from store
  const data = useSelector((state) => state.counterReducer.counter)
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn)
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
      <br /><br />

      <div className='card'>
      <h3>{isLoggedIn ? 'Logged In' : 'Not Authenticated'}</h3>
        <button onClick={() => dispatchCounter(setLoginAction())}>Login</button>
        <button onClick={() => dispatchCounter(setLogoutAction())}>Logout</button>
      </div>

      <BackToHome />
    </>
  )
}

export default ReduxExample
