export default function Reducer2(state = {}, action = {}) {


  switch (action.type) {
    case 1:
      console.log('Case 1 hit');
      return {

      };
    case 2:
    console.log('Case 2 hit');
      return {

      };
    default:
      return {state:'so'};
  }
}
