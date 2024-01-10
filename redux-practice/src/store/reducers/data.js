const data = (state = {message:null,status:null}, action) => {
  switch (action.type) {
    case "IMAGE":
      let obj = { ...state, ...action.payload };
      return obj;
    default:
      return state;
  }
};
export default data;
