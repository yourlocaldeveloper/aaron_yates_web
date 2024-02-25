import React from 'react';
import cn from 'classnames';

import { ScrollButton } from '@/components/atoms/ScrollButton/ScrollButton';

import styles from './ScrollView.module.scss';

interface ScrollViewProps {
  activePage: String;
  pages: String[];
}

export const ScrollView: React.FC<ScrollViewProps> = (props) => {
  const { activePage, pages } = props;

  return (
    <div className={styles.scrollView}>
      {pages.map((page, i) => (
        <ScrollButton key={i} isActive={page === activePage} />
      ))}
    </div>
  );
};
