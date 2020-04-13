import React, { Component } from "react";

import Dropdown from "../../Pages/dropdown";

class Header extends Component {
  state = {
    notification: [
      {
        id: 1,
        icon: "thumbs-up",
        title: "Someone likes our posts.",
        duration: "1 hours ago",
      },
      {
        id: 2,
        icon: "cart-arrow-down",
        title: "Your order is placed",
        duration: "6 hours ago",
      },
      {
        id: 3,
        icon: "envelope-open",
        title: "New Message received",
        duration: "1 day ago",
      },
    ],
    settings: [
      {
        id: 1,
        icon: "cart-arrow-down",
        title: "Hide Sidebar",
      },
    ],
  };

  render() {
    return (
      <div className="rc_header">
        <div className="header-parent d-flex">
          <div className="header-logo">
            <img src="/assets/img/download.png" alt="currupt file"/>
          </div>
          <div className="d-flex ml-auto header-action">
            <div>
              <Dropdown
                dorplist={this.state.notification}
                icon="bell"
                color="#383b4e"
              />
            </div>
            <div className="ml-4">
              <Dropdown
                dorplist={this.state.settings}
                icon="cog"
                color="#383b4e"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
