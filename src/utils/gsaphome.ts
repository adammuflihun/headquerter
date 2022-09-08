import gsap from 'gsap';

export const gsaphome = () => {
  console.log(`ancol!`);
  gsap.from($('.dot'), {
    opacity: 0,
    duration: 2,
    repeat: -1,
    ease: 'Bounce.easeIn',
    stagger: {
      from: 'random',
      amount: 0.5,
    },
  });
};
