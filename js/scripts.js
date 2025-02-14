// console.log('OK');
console.log(gsap);

gsap.from(".Letters", {
  y: -61,
  opacity: 0,
  delay: 1,
  duration: 3, 
  ease: 'elastic'
});

gsap.from(".Vines", {
  opacity: 0, 
  duration: 3, // Fixed typo here
  delay: 3.2
});
