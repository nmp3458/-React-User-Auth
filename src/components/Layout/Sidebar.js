import React, { Component } from 'react';

import FontIcon from '../Common/FontAwesomeIcon';

class Sidebar extends Component {
  state = {
    sideBar: [
      {
        id:1,
        icon: 'home',
        text: 'Dashboard',
      },
      {
        id:2,
        icon: 'cube',
        text: 'UI Elements',
      },
      {
        id:3,
        icon: 'newspaper',
        text: 'Form',
      },
      {
        id:4,
        icon: 'table',
        text: 'Table',
      },
      {
        id:5,
        icon: 'chart-bar',
        text: 'Charts',
      },
    ],
  };

  render() {
    return (
      <div className='rc_sidebar'>
        <ul className='menu'>
          {this.state.sideBar.map((item) => (
            <li key={item.id}>
              <a href='#'>
                <i>
                  <FontIcon icon={item.icon} size='1x' />
                </i>
                <span>{item.text}</span>
              </a>
            </li>
          ))}
          }
        </ul>
      </div>
    );
  }
}

export default Sidebar;
