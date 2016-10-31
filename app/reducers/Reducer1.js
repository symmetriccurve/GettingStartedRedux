import * as types from '../actions/actionTypes';

const initialState = {
  count: 0
};

export default function Reducer1(state = initialState, action = {}) {
   //console.log('State from Counter============',state);
   //console.log('action from Counter============',action);
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
