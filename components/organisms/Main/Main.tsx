import React from 'react';

import { LandingArea } from '@/components/organisms/LandingArea';

import styles from './Main.module.scss';

export const Main: React.FC = ({}) => {
  return (
    <div className={styles.main}>
      <LandingArea />
    </div>
  );
};
