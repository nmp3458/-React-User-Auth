import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FontIcon = React.forwardRef(({ icon, onClick, color, size }, ref) => {
  return ref ? (
    <div
      className='cursor-pointer'
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <FontAwesomeIcon
        icon={icon}
        color={color ? color : 'white'}
        size={size ? size : '15x'}
      />
    </div>
  ) : (
    <FontAwesomeIcon
      icon={icon}
      color={color ? color : 'white'}
      size={size ? size : '15x'}
    />
  );
});

export default FontIcon;