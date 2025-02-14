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

// Function to generate a random number between min and max
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to animate the fireflies
function animateFireFlies() {
  const fireFlies = document.querySelectorAll('.fireFlies g');

  fireFlies.forEach(fireFly => {
    gsap.to(fireFly, {
      x: () => getRandom(-100, 100), // Random x position
      y: () => getRandom(-100, 100), // Random y position
      duration: () => getRandom(2, 5), // Random duration
      repeat: -1, // Infinite repeat
      yoyo: true, // Yoyo effect
      ease: "power1.inOut" // Easing function
    });
  });
}

// Call the function to start the animation
animateFireFlies();