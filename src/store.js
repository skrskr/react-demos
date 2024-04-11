import { createStore } from 'redux'

import ReducerCounter from './Reducer/ReducerCounter';

// 2 create store 
const storeCounter = createStore(ReducerCounter);

export default storeCounter;