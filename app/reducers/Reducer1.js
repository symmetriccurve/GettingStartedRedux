import * as types from '../actions/actionTypes';

const initialState = {
  count: 0
};
/* Every reducer should have it's initial State*/
export default function Reducer1(state = initialState, action = {}) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}
