import React from 'react';
import useDarkMode from 'use-dark-mode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DarkModeToggle = () => {
  const { value, toggle } = useDarkMode(false);

  return (
    <button type="button" className="button is-white">
      <span className="icon">
        <FontAwesomeIcon
          onClick={() => toggle(!value)}
          className="is-size-3"
          icon={value ? ['fas', 'toggle-on'] : ['fas', 'toggle-off']}
        />
      </span>
    </button>
  );
};

export default DarkModeToggle;
