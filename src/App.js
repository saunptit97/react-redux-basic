import React, { Component } from "react";
import "./App.css";
import TableContainer from "./containers/TableContainer";
import DetailContainer from "./containers/DetailContainer";
class App extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="text-center">Students's Infomation</h2>
        <br />
        <div className="row">
          <div className="col-md-8">
            <TableContainer />
          </div>
          <div className="col-md-4">
            <DetailContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
