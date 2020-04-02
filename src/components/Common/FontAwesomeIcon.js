import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FontIcon = React.forwardRef(({ icon, onClick, iColor }, ref) => {
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
        color={iColor ? iColor : 'white'}
        size='3x'
      />
    </div>
  ) : (
    <FontAwesomeIcon icon={icon} color={iColor ? iColor : 'white'} size='3x' />
  );
});

export default FontIcon;
