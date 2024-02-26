import React, { useState } from 'react';

import { LandingArea } from '@/components/organisms/LandingArea';
import { ScrollView } from '@/components/molecules/ScrollView/ScrollView';

import styles from './Main.module.scss';

export enum Pages {
  LANDING_PAGE = 'LandingPage',
  ABOUT = 'About',
  FOOTER = 'Footer',
}

export const Main: React.FC = ({}) => {
  const pages = [Pages.LANDING_PAGE, Pages.ABOUT, Pages.FOOTER];

  const [currentPage, setCurrentPage] = useState(Pages.LANDING_PAGE);

  return (
    <div className={styles.main}>
      <ScrollView pages={pages} activePage={currentPage} />
      <LandingArea />
      <div className={styles.placeholder}></div>
    </div>
  );
};
