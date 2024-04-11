import { DECREMENT, INCREMENT, RESET } from "../types/counterType";

const incrementCounterAction = () => {
    return {
        type: INCREMENT
    };
}

const decrementCounterAction = () => {
    return {
        type: DECREMENT
    };
}

const resetCounterAction = () => {
    return {
        type: RESET
    };
}

export {incrementCounterAction, decrementCounterAction, resetCounterAction}