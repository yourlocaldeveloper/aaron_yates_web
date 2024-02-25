import React from 'react';
import cn from 'classnames';

import styles from './ScrollButton.module.scss';

interface ScrollButtonProps {
  isActive: boolean;
  key: number;
}

export const ScrollButton: React.FC<ScrollButtonProps> = (props) => {
  const { isActive, key } = props;

  return (
    <button
      key={key}
      className={cn(styles.scrollButton, { [styles.active]: isActive })}
    ></button>
  );
};
