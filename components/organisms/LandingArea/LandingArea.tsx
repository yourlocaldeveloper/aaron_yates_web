import React from 'react';
import Image from 'next/image';

import { Title } from '@/components/atoms/Title';

import styles from './LandingArea.module.scss';
import airBalloon from '@/public/images/airballoon.png';

export const LandingArea: React.FC = ({}) => {
  return (
    <div className={styles.landingArea}>
      <div className={styles.leftSection}>
        <Title heading={'h3'}>hello... my name is Aaron</Title>
        <Title heading={'h1'} isBold>
          Frontend Web Developer
        </Title>
        <Title heading={'h4'}>
          I like to build scalable modern website, using the latest
          technologies.
        </Title>
      </div>
      <div className={styles.rightSection}>
        <Image
          className={styles.airBalloon}
          src={airBalloon}
          alt={'cute air balloon'}
          width={250}
        />
      </div>
    </div>
  );
};
