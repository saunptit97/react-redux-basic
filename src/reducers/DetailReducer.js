import * as type from "./../constants/AtionType";
var initialState = null;

const DetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.DETAIL_STUDENT:
      return action.payload;
    default:
      return state;
  }
};

export default DetailReducer;
