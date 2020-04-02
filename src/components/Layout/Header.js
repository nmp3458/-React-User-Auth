import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import FontIcon from '../Common/FontAwesomeIcon';

class Header extends Component {
  render() {
    return (
      <div className='rc_header'>
        <div className='container'>
          <div className='d-flex header-nav'>
            <a href="" className='header-desktop'>header-desktop</a>
            <div className='d-flex ml-auto'>
              <div>
                <FontIcon icon='bell' iColor='red'/>
              </div>
              <Dropdown>
                <Dropdown.Toggle as={FontIcon} icon='bell'></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
