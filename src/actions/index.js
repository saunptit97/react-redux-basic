import * as type from "./../constants/AtionType";
export const actDelete = student => {
  return {
    type: type.DELETE_STUDENT,
    student
  };
};
export const actDetail = student => {
  console.log("Your click : ", student.name);
  return {
    type: type.DETAIL_STUDENT,
    payload: student
  };
};
