const initialState = {
  count: 0,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state + 1,
      };
    default:
      return state;
  }
}
