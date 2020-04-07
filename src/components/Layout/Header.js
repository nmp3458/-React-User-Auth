import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import FontIcon from '../Common/FontAwesomeIcon';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      notification: [
        {
          id: 1,
          icon: 'thumbs-up',
          title: 'Someone likes our posts.',
          duration: '1 hours ago',
        },
        {
          id: 2,
          icon: 'cart-arrow-down',
          title: 'Your order is placed',
          duration: '6 hours ago',
        },
        {
          id: 3,
          icon: 'envelope-open',
          title: 'New Message received',
          duration: '1 day ago',
        },
      ],
      settings:[{
          id: 1,
          icon: 'cart-arrow-down',
          title: 'Hide Sidebar'
        }]
    };
  }
  render() {
    return (
      <div className='rc_header'>
        <div className='header-parent d-flex'>
            <div className='header-logo'>
              <img src='/assets/img/download.png'/>
            </div>
            <div className='d-flex ml-auto header-action'>
              <div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={FontIcon}
                    icon='bell'
                    color='#383b4e'
                  ></Dropdown.Toggle>
                  <Dropdown.Menu>
                    {this.state.notification.map((listItem) => (
                      <Dropdown.Item key={listItem.id}>
                        <div className='notifyimg'>
                          <i>
                            <FontIcon icon={listItem.icon} size='xs' />
                          </i>
                        </div>
                        <div>
                          <span className='text'>{listItem.title}</span>
                          <div className='small text-muted'>
                            {listItem.duration}
                          </div>
                        </div>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className='ml-4'>
                <Dropdown>
                  <Dropdown.Toggle
                    as={FontIcon}
                    icon='cog'
                    color='#383b4e'
                  ></Dropdown.Toggle>
                  <Dropdown.Menu>
                    {this.state.settings.map((listItem) => (
                      <Dropdown.Item key={listItem.id}>
                        <div className='notifyimg'>
                          <i>
                            <FontIcon icon={listItem.icon} size='xs' />
                          </i>
                        </div>
                        <div>
                          <span className='text'>{listItem.title}</span>
                    
                        </div>
                      </Dropdown.Item>
                    ))}
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
