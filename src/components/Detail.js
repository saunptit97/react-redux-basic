import React from "react";
class Detail extends React.Component {
  render() {
    var { active } = this.props;
    console.log(active);
    var elm = null;
    active !== null ? (elm = this.pannelbody(active)) : "";
    return (
      <div className=" panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Student's Infomation</h3>
        </div>
        <div className="panel-body">{elm}</div>
      </div>
    );
  }
  pannelbody = active => {
    return (
      <div className="panel-body">
        <p>ID: {active.id}</p>
        <p>Name: {active.name}</p>
        <p>Sex: {active.sex ? "Male" : "Female"}</p>
        <p>Date-of-birth:{active.date_of_birth} </p>
        <p>Add:{active.add} </p>
        <p>Phone: {active.phone}</p>
        <p>Avg: {active.avg}</p>
      </div>
    );
  };
}
export default Detail;
