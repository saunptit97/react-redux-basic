import React from "react";
class TaskItem extends React.Component {
  render() {
    var { student } = this.props;
    return (
      <tr>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => this.onDetail(student)}
          >
            <i className="fa fa-info" /> Detail
          </button>
          <button
            className="btn btn-danger m-l"
            onClick={() => this.onDelete(student)}
          >
            <i className="fa fa-close" /> Delete
          </button>
        </td>
      </tr>
    );
  }
  onDelete = student => {
    this.props.onDelete(student);
  };
  onDetail = student => {
    this.props.onDetail(student);
  };
}
export default TaskItem;
