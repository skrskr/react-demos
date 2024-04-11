import { createStore } from 'redux'
import CounterReducer from '../reducers/counterReducer';


// 2 create store 
const storeCounter = createStore(CounterReducer);

export default storeCounter;