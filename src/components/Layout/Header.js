import React, { Component } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  render() {
    return (
      <div className='dash_header'>
        <div className='container'>
          <div className='d-flex header-nav'>
            <a className='header-desktop'></a>
            <div className='d-flex ml-auto'>
              <Dropdown>
                <Dropdown.Toggle id='dropdown-basic'>
                  <FontAwesomeIcon icon={faBell} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>
                    Something else
                  </Dropdown.Item>
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
