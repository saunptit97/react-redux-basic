import * as type from "./../constants/AtionType";
var data = JSON.parse(localStorage.getItem("students"));
var initialState = [
  {
    id: "B15DCCN456",
    name: "Nguyen The Sau",
    sex: true,
    date_of_birth: "20/3/1997",
    add: "Ha Noi",
    phone: "0977695448",
    avg: 9.8
  },
  {
    id: "B15DCCN192",
    name: "Ngo Thi Thu Han",
    sex: true,
    date_of_birth: "2/8/1997",
    add: "Hung Yen",
    phone: "0977695448",
    avg: 9.8
  },
  {
    id: "B15DCCN357",
    name: "Nguyen Ngoc Minh",
    sex: true,
    date_of_birth: "20/3/1997",
    add: "Hai Duong",
    phone: "0977695448",
    avg: 9.8
  }
];
const ListStudent = (state = data, action) => {
  var index = -1;
  var { student } = action;
  switch (action.type) {
    case type.DELETE_STUDENT:
      index = findIndex(state, student);
      console.log(index);
      state.splice(index, 1);
      localStorage.setItem("students", JSON.stringify(state));
      return [...state];

    default:
      //localStorage.setItem("students", JSON.stringify(initialState));
      return [...state];
  }
};
const findIndex = (students, student) => {
  var index = -1;
  for (var i = 0; i < students.length; i++) {
    if (students[i].id === student.id) {
      return (index = i);
    }
  }
  return index;
};
export default ListStudent;
