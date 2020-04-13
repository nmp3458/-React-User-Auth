import React from "react";
import { NavLink } from "react-router-dom";

import FontIcon from "../utils/fontIcon";


const sideList = (props) => {
  return (
    <ul className="menu">
      {props.list.map((item) => (
        <li key={item.id}>
          <NavLink to={item.url}>
            <i>
              <FontIcon icon={item.icon} size="1x" />
            </i>
            <span>{item.text}</span>
          </NavLink>
        </li>
      ))}
      }
    </ul>
  );
};

export default sideList;
