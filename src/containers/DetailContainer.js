import React from "react";
import Detail from "./../components/Detail";
import { connect } from "react-redux";
class DetaiContainer extends React.Component {
  render() {
    var { active } = this.props;
    return <Detail active={active} />;
  }
}
var mapStateToProps = state => {
  return {
    active: state.active
  };
};
export default connect(mapStateToProps, null)(DetaiContainer);
