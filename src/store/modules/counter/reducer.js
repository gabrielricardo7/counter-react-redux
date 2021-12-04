import { INCREASE, DECREASE } from "./actionTypes";

const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case INCREASE:
      return state + action.number;

    case DECREASE:
      return state - action.number;

    default:
      return state;
  }
};

export default reducerCounter;
