import { createStore } from 'redux'
import {RootReducer} from '../reducers/rootReducer';


// 2 create store 
const storeCounter = createStore(RootReducer);

export default storeCounter;