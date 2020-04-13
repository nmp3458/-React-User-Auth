import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

import FontIcon from "../utils/fontIcon";

const dropdown = (props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        as={FontIcon}
        icon={props.icon}
        color={props.color}
      ></Dropdown.Toggle>
      <Dropdown.Menu>
        {props.dorplist.map((listItem) => (
          <Dropdown.Item key={listItem.id}>
            <div className="notifyimg">
              <i>
                <FontIcon icon={listItem.icon} size="xs" />
              </i>
            </div>
            <div>
              <span className="text">{listItem.title}</span>
              <div className="small text-muted">{listItem.duration}</div>
            </div>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default dropdown;
