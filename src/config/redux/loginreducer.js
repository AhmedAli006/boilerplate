const INITIAL_SATE = {
   isLogin : false
};

const reducer = (state = INITIAL_SATE, { type, Payload }) => {
  switch (type) {
    case "login":
      return {  isLogin: true };
    case "signout":
        return { isLogin : false}
    default:
        return state
  }
};

export default reducer;
