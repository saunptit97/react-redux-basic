import React from "react";
import { connect } from "react-redux";
import TaskTable from "./../components/TaskTable";
import TaskItem from "./../components/TaskItem";
import { actDelete, actDetail } from "./../actions/index";
class TableContainer extends React.Component {
  render() {
    var students = this.props.students;
    return <TaskTable>{this.elmTaskItem(students)}</TaskTable>;
  }
  elmTaskItem = students => {
    var elm = null;
    var { onDelete, onDetail } = this.props;
    elm = students.map(student => {
      return (
        <TaskItem
          key={student.id}
          student={student}
          onDelete={onDelete}
          onDetail={onDetail}
        />
      );
    });
    return elm;
  };
}

var mapStateToProps = state => {
  return {
    students: state.students
  };
};
var mapDispatchToProps = (dispatch, props) => {
  return {
    onDelete: student => {
      dispatch(actDelete(student));
    },
    onDetail: student => {
      dispatch(actDetail(student));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
