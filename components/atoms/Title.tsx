import React from 'react';
import cn from 'classnames';

import styles from './Title.module.scss';

type HeadingValue = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface TitleProps {
  children: string;
  heading: HeadingValue;
}

export const Title: React.FC<TitleProps> = (props) => {
  const { children, heading } = props;

  return <h1 className={cn(styles.title, styles[heading])}>{children}</h1>;
};
