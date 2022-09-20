import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const gsaphome = () => {
  console.log(`ancol!`);
  let tlHomeHeader = gsap.timeline();

  // gsap home header
  let targets = $('.dot');
  let number0fTargets = targets.length;
  let duration = 0.1;
  let repeatDelay = duration * (number0fTargets - 1);

  tlHomeHeader
    .from('.dot', {
      opacity: 0,
      duration: 0.5,
      yoyo: 1,
      repeat: -1,
      ease: 'Bounce.easeIn',
      stagger: {
        from: 'random',
        each: duration,
        repeat: -1,
        repeatDelay: repeatDelay,
      },
    })
    .from('.graphic-box', { y: 150, opacity: 0 }, 0.5)
    .to('.graphic-box', { duration: 2, yoyo: 1, y: 50, repeat: -1, ease: 'Power1.easeInOut' }, 1);

  // gsap.to('.wrap-boxes', {
  //   duration: 2,
  //   x: '-30vw',
  //   ease: 'linear',
  //   scrollTrigger: {
  //     trigger: '.wrap-boxes',
  //     // markers: true,
  //     scrub: true,
  //     start: '-100% 50%', //when top of herman passes 75% viewport height
  //     end: 'bottom 15%', //when bottom of herman passes 25% viewport height
  //     toggleActions: 'play none none restart',
  //     //options: play, pause, resume, reset, restart, complete, reverse,none
  //   },
  // });

  gsap.to(
    '.icon-box-smoother',
    { duration: 2, yoyo: 1, y: 50, repeat: -1, ease: 'Power1.easeInOut' },
    1
  );

  const tlFloatBox = gsap.timeline();

  tlFloatBox.to(
    '.float-box',
    {
      duration: 2,
      yoyo: 1,
      y: 40,
      repeat: -1,
      ease: 'Power2.easeInOut',
      stagger: {
        from: 'random',
        each: 0.2,
      },
    },
    1
  );
};
