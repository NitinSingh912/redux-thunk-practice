const points = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      let currentState = state;
      currentState = currentState + 1;
      return currentState;

    default:
      return state;
  }
};
export default points;
