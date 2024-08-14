export enum Section {
  LANDING_PAGE = 'LandingPage',
  ABOUT = 'About',
  FOOTER = 'Footer',
}

const smoothScroll = (
  scrollTargetY: number,
  setIsScrolling: React.Dispatch<boolean>,
  speed: number = 1000
) => {
  let currentTime = 0;

  const scrollY = document.documentElement.scrollTop;

  const time = Math.max(
    0.1,
    Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8)
  );

  const easeInOutCubic = (pos: number) => {
    if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 3);
    return 0.5 * (Math.pow(pos - 2, 3) + 2);
  };

  const runAnimation = () => {
    currentTime += 1 / 120;

    let p = currentTime / time;
    let t = easeInOutCubic(p);

    if (p < 1) {
      requestAnimationFrame(runAnimation);

      scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
      console.log('SCROLLING');
    } else {
      scrollTo(0, scrollTargetY);
      console.log('SCROLLING 2');

      setIsScrolling(false);
    }
  };

  runAnimation();
};

type SectionOptions = {
  sectionNode: HTMLElement;
  smooth?: boolean;
};

export const goToSection = (
  section: string,
  options: SectionOptions,
  setIsScrolling: React.Dispatch<boolean>
) => {
  const { sectionNode, smooth = true } = options;

  if (!sectionNode) {
    return;
  }

  setIsScrolling(true);
  if (smooth) smoothScroll(sectionNode.offsetTop, setIsScrolling);
  else scrollTo(0, sectionNode.offsetTop);
};
