import { combineReducers } from "redux";
import ListStudent from "./ListStudent";
import DetailReducer from "./DetailReducer";
const allReducer = combineReducers({
  students: ListStudent,
  active: DetailReducer
});
export default allReducer;
