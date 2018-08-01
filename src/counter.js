import { createStore } from "redux";

const action = {
  type: "INCREASE_COUNT",
  payload: 1
};

// use an action creator instead of an action for greater flexbility
function actionCreator(amount = 1) {
  return {
    type: "INCREASE_COUNT",
    payload: amount
  };
}

// ES6 Version
export const increaseCount = (amount = 1) => ({
  type: "INCREASE_COUNT",
  payload: amount
});

console.log(increaseCount(5));

const DEFAULT_STATE = {
  count: 0
};

export function reducer(state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return {
        ...state,
        count: state.count + action.payload
      };
  }
  return state;
}

export const store = createStore(reducer);
