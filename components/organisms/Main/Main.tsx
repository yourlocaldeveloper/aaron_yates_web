import React, { useState, useEffect, useCallback } from 'react';

import { ExperienceArea } from '@/components/organisms/ExperienceArea';
import { LandingArea } from '@/components/organisms/LandingArea';
import { ScrollView } from '@/components/molecules/ScrollView/ScrollView';

import { Section, goToSection } from './Main.helpers';

import styles from './Main.module.scss';

export const Main: React.FC = ({}) => {
  const pages = [Section.LANDING_PAGE, Section.ABOUT, Section.FOOTER];

  const [currentSection, setCurrentSection] = useState(Section.LANDING_PAGE);
  const [prevTime, setPrevTime] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const isScrollingTooFast = useCallback(
    (ms = 100) => {
      const curTime = new Date().getTime();
      const timeDiff = curTime - prevTime;
      setPrevTime(curTime);

      return timeDiff < ms;
    },
    [prevTime]
  );

  const handleWheelScroll = useCallback(
    (event: WheelEvent) => {
      const sectionOrder = [Section.LANDING_PAGE, Section.ABOUT];

      if (isScrolling) return;

      const currentSectionOrder = sectionOrder.findIndex(
        (section) => section === currentSection
      );

      const nextSectionOrder =
        sectionOrder[currentSectionOrder + Math.sign(event.deltaY)];

      if (!nextSectionOrder) return;

      const nextSectionNode = document.getElementById(nextSectionOrder);

      if (!nextSectionNode) return;

      setCurrentSection(nextSectionOrder);

      goToSection(
        currentSection,
        { sectionNode: nextSectionNode },
        setIsScrolling
      );
    },
    [isScrolling, currentSection]
  );

  useEffect(() => {
    const { documentElement } = document;

    documentElement.addEventListener('wheel', handleWheelScroll);

    return () => {
      documentElement.removeEventListener('wheel', handleWheelScroll);
    };
  }, [handleWheelScroll]);

  return (
    <div className={styles.main}>
      <ScrollView pages={pages} activePage={currentSection} />
      <LandingArea />
      <ExperienceArea />
    </div>
  );
};
