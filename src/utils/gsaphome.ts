import gsap from 'gsap';

export const gsaphome = () => {
  console.log(`ancol!`);

  const tlHomeHeader = gsap.timeline();

  // gsap home header
  let targets = $('.dot');
  let number0fTargets = targets.length;
  let duration = 0.1;
  let repeatDelay = duration * (number0fTargets - 1);

  tlHomeHeader
    .from($('.dot'), {
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
};
