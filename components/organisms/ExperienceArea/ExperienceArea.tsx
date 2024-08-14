import React from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { Section } from '@/components/organisms/Main/Main.helpers';
import { Title } from '@/components/atoms/Title';
import asteroidSmall from '@/public/images/asteroidSmall.png';

import styles from './ExperienceArea.module.scss';

export const ExperienceArea: React.FC = ({}) => {
  return (
    <div id={Section.ABOUT} className={styles.experienceArea}>
      <div className={styles.experienceWording}>
        <Title heading={'h2'} isBold>
          Experience over the <span className={styles.lightText}>light</span>
          years
        </Title>
      </div>
      <div className={styles.experienceAsteroids}>
        <svg
          className={styles.svg}
          xmlns='http://www.w3.org/2000/svg'
          width={1500}
          height={500}
        >
          <line className={styles.line} x1='0' y1='80' x2='1500' y2='80' />
        </svg>
        <div className={styles.asteroidContainer}>
          <Image
            className={styles.asteroidSmall}
            src={asteroidSmall}
            alt={'small asteroid'}
            width={100}
          />
          <p className={styles.company}>La Fosse Academy</p>
          <p className={styles.role}> Trainee Fullstack Web Developer</p>
          <p className={styles.timeWith}>Feb 2021 - May 2021</p>
          <p className={styles.description}>
            Undertook a 12 week training course in fullstack development.
            Focusing on Javascript & Python, utalising tools such as React,
            ExpressJS, Django and more.
          </p>
          <svg
            className={styles.svg}
            xmlns='http://www.w3.org/2000/svg'
            width={300}
            height={500}
          >
            <line className={styles.line} x1='150' y1='80' x2='150' y2='200' />
          </svg>
        </div>
        <div className={styles.asteroidContainer}>
          <Image
            className={styles.asteroidSmall}
            src={asteroidSmall}
            alt={'small asteroid'}
            width={100}
          />
          <p className={styles.company}>La Fosse Associates</p>
          <p className={styles.role}>Front-end Web Developer</p>
          <p className={styles.timeWith}>June 2021 - June 2023</p>
          <p className={styles.description}>
            After my training, I was on Placement for Kingfisher plc for 2 years
            as a Front-end Developer. Responsbilities included developing
            feature based work using React, NextJS & Typescript.
          </p>
          <svg
            className={styles.svg}
            xmlns='http://www.w3.org/2000/svg'
            width={300}
            height={500}
          >
            <line className={styles.line} x1='150' y1='80' x2='150' y2='200' />
          </svg>
        </div>
        <div className={styles.asteroidContainer}>
          <Image
            className={styles.asteroidSmall}
            src={asteroidSmall}
            alt={'small asteroid'}
            width={100}
          />
          <p className={styles.company}>Kingfisher plc</p>
          <p className={styles.role}> Mid Level Front-end Web Developer</p>
          <p className={styles.timeWith}>June 2023 - Current</p>
          <p className={styles.description}>
            After my placement, I joined Kingfisher on a permanent basis. I
            continued working on their web platform for one of their banners.
            Continued on feature based work but also a larger focus on maintance
            and improvements.
          </p>
          <svg
            className={styles.svg}
            xmlns='http://www.w3.org/2000/svg'
            width={300}
            height={500}
          >
            <line className={styles.line} x1='150' y1='80' x2='150' y2='200' />
          </svg>
        </div>
      </div>
    </div>
  );
};
