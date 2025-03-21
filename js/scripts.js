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

window.addEventListener('load', function() {
  var audio = document.getElementById('background-audio');
  audio.controls = false; // Hide the audio player controls

  console.log('Audio element:', audio);

  // Function to start audio playback
  function startAudioPlayback() {
    audio.play().then(function() {
      console.log('Audio playback started');
    }).catch(function(error) {
      console.log('Audio playback failed:', error);
    });
  }

  // Function to stop audio playback
  function stopAudioPlayback() {
    audio.pause();
    audio.currentTime = 0; // Reset audio to the beginning
    console.log('Audio playback stopped');
  }

  // Add event listener to the play button
  const playButton = document.querySelector('.play-triangle'); // Select the element with the class 'play-triangle'
  playButton.addEventListener('click', function() {
    if (playButton.classList.contains('play-triangle')) {
      // If it's a triangle, play the audio and turn it into a square
      startAudioPlayback();
      playButton.classList.remove('play-triangle');
      playButton.classList.add('stop-square');
      playButton.setAttribute('points', '165,221 185,221 185,241 165,241'); // Change to square
    } else {
      // If it's a square, stop the audio and turn it back into a triangle
      stopAudioPlayback();
      playButton.classList.remove('stop-square');
      playButton.classList.add('play-triangle');
      playButton.setAttribute('points', '165,221 185,231 165,241'); // Change back to triangle
    }
  });
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

gsap.from(".bird", {
  opacity: 0,
  delay: 4,
});

gsap.from(".music1, .music2, .music3", {
  opacity: 0,
  delay: 5,
});