import React from 'react';

import { LandingArea } from '@/components/organisms/LandingArea';
import { ScrollView } from '@/components/molecules/ScrollView/ScrollView';

import styles from './Main.module.scss';

export const Main: React.FC = ({}) => {
  const pages = ['LandingPage', 'About', 'Footer'];

  return (
    <div className={styles.main}>
      <ScrollView pages={pages} activePage={'LandingPage'} />
      <LandingArea />
    </div>
  );
};
