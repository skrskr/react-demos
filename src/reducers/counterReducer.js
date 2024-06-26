import { DECREMENT, INCREMENT, RESET } from "../types/counterType"


// 1 create reducer function
export const CounterReducer = (state = {counter: 0}, action) => {

    switch (action.type) {
      case INCREMENT:
        return {counter: state.counter + 1}
      case DECREMENT:
        return {counter: state.counter - 1}
      case RESET:
        return {counter: 0}
      default:
        return state
    }
  }

