import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import CustomIcon from '../CustomIcon';

class Header extends Component {
  render() {
    return (
      <div className='dash_header'>
        <div className='container'>
          <div className='d-flex header-nav'>
            <a href="" className='header-desktop'>header-desktop</a>
            <div className='d-flex ml-auto'>
              <div>
                <CustomIcon icon='bell' iColor='red'/>
              </div>
              <Dropdown>
                <Dropdown.Toggle as={CustomIcon} icon='bell'></Dropdown.Toggle>
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
