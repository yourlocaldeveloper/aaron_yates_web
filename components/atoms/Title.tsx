import React from 'react';
import cn from 'classnames';

import styles from './LandingArea.module.scss';

type HeadingValue = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface TitleProps {
  text: string;
  heading: HeadingValue;
}

export const Title: React.FC<TitleProps> = ({ text, heading }) => {
  return <h1 className={cn(styles.title, { heading })}>{text}</h1>;
};
