import React, { Component } from "react";

import SideList from "../../Pages/list";

import axios from "../../utils/axios";

class Sidebar extends Component {
  state = {
    sideBar: [],
  };

  componentDidMount() {
    axios.get("dashboard.json").then((res) => {
      Object.keys(res.data).map((key) => {
        this.setState({sideBar : res.data[key].sideBar});
      });
    });
  }

  render() {
    return (
      <div className="rc_sidebar">
        <SideList list={this.state.sideBar} />
      </div>
    );
  }
}

export default Sidebar;
