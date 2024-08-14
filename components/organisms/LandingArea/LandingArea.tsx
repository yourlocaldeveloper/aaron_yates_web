import React, { useCallback, useEffect, useState, UIEventHandler } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { Title } from '@/components/atoms/Title';

import styles from './LandingArea.module.scss';
import airBalloon from '@/public/images/airballoon.png';
import shootingStars from '@/public/images/shootingstarbck.png';
import stars from '@/public/images/starsbck.png';
import { Section } from '../Main/Main.helpers';

export const LandingArea: React.FC = ({}) => {
  // const [y, setY] = useState(0);

  // const handleLandingAreaScroll = useCallback(() => {
  //   console.log(window.scrollY);
  //   if (y > window.scrollY) {
  //     console.log('Scroll Up');
  //   } else if (y < window.scrollY) {
  //     console.log('scrolling down');
  //   }
  //   setY(window.scrollY);
  // }, [y]);

  // useEffect(() => {
  //   setY(window.scrollY);

  //   window.addEventListener('scroll', handleLandingAreaScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleLandingAreaScroll);
  //   };
  // }, [handleLandingAreaScroll]);

  return (
    <div id={Section.LANDING_PAGE} className={styles.landingArea}>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <Title heading={'h3'}>hello... my name is Aaron</Title>
          <Title heading={'h2'} isBold>
            Frontend Web Developer
          </Title>
          <Title heading={'h4'}>
            I like to build scalable modern website, using the latest
            technologies.
          </Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            consequat, elit quis iaculis tincidunt, ligula diam consectetur sem,
            ultricies tempor nisl magna et quam. Suspendisse sit amet rutrum
            nisi, non aliquam velit. Curabitur dignissim dui ante, tincidunt
            tempus metus varius in. Nunc vulputate facilisis malesuada. Cras sed
            dapibus nulla. Phasellus sed ornare enim, volutpat placerat arcu.
            Integer consequat nulla eu tincidunt luctus. Integer id facilisis
            mi.
          </p>
        </div>
        <div className={styles.rightSection}>
          <Image
            className={styles.airBalloon}
            src={airBalloon}
            alt={'cute air balloon'}
            width={250}
          />
        </div>
        <Image
          className={styles.shootingStars}
          src={shootingStars}
          alt='shooting stars'
        />
        <Image className={styles.stars} src={stars} alt='stars' />
      </div>
    </div>
  );
};
