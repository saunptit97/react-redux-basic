import React from "react";
class TaskTable extends React.Component {
  render() {
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
          {this.props.children}
        </thead>
      </table>
    );
  }
}
export default TaskTable;
