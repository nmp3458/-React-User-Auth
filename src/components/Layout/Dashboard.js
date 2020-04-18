import React, { Component } from "react";

import { Header, Footer, Main, Sidebar } from "./index";

class Dashboard extends Component {
  /*********************Render Mrthod*********************/
  render() {
    return (
      <React.Fragment>
        <Header />
        <Sidebar />
        <Main />
      </React.Fragment>
    );
  }
  /*********************Render Mrthod*********************/
}
export default Dashboard;
