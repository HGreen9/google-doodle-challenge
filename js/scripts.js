// console.log('OK');
console.log(gsap);

// Animate the Google letters dropping in
gsap.from(".Letters", {
  y: -61,
  opacity: 0,
  delay: 1, // Start after 1 second
  duration: 3, // Duration of the animation
  ease: "elastic" // Elastic easing for a bounce effect
});

gsap.from(".Vines", {
  opacity: 0, 
  duration: 3, // Fixed typo here
  delay: 3.2
});

// Animate the vine rope dropping in with a bounce effect, synchronized with the letters
gsap.from("#vine-rope", {
  y: -500, // Start 500px above its current position
  opacity: 0, // Start fully transparent
  duration: 3, // Match the duration of the letters animation
  ease: "elastic.out(1, 0.5)", // Elastic easing for a bounce effect
  delay: 1, // Match the delay of the letters animation
  onStart: () => console.log("Vine rope animation started"),
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

  // Add event listener to the vine rope
  const vineRope = document.querySelector("#vine-rope");
  console.log(vineRope); // Should log the vine element

  // Track the current scene state
  let isNightTime = false;

  vineRope.addEventListener("click", function() {
    // Animate the vine to stretch and bounce
    gsap.to("#vine-rope", {
      scaleY: 1.2, // Stretch vertically
      duration: 0.2, // Quick stretch
      yoyo: true, // Return to original state
      repeat: 1, // Repeat once for the bounce effect
      ease: "power1.inOut", // Smooth easing
      transformOrigin: "center top", // Stretch from the top
    });

    gsap.to("#vine-rope path", {
      scaleY: 1.2, // Stretch vertically
      duration: 0.2, // Quick stretch
      yoyo: true, // Return to original state
      repeat: 1, // Repeat once for the bounce effect
      ease: "power1.inOut", // Smooth easing
      transformOrigin: "center top", // Stretch from the top
    });

    console.log("Stretch and bounce animation triggered");

    if (!isNightTime) {
      // Change to nighttime
      document.body.style.transition = "background-color 1s ease";
      document.body.style.backgroundColor = "#2c3e50"; // Dark blue for nighttime effect

      // Dim other elements
      const elementsToDim = document.querySelectorAll("svg");
      elementsToDim.forEach(element => {
        element.style.transition = "opacity 1s ease";
        element.style.opacity = "0.5"; // Dim elements
      });

      console.log("Scene changed to nighttime");
    } else {
      // Change back to daytime
      document.body.style.transition = "background-color 1s ease";
      document.body.style.backgroundColor = "#ffffff"; // White for daytime effect

      // Restore other elements
      const elementsToRestore = document.querySelectorAll("svg");
      elementsToRestore.forEach(element => {
        element.style.transition = "opacity 1s ease";
        element.style.opacity = "1"; // Restore elements
      });

      console.log("Scene changed to daytime");
    }

    // Toggle the scene state
    isNightTime = !isNightTime;
  });

  vineRope.addEventListener("click", function() {
    console.log("Vine clicked! Starting animation...");
    gsap.to("#vine-rope path", {
      scaleY: 1.2,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
      transformOrigin: "center top",
    });
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
    // Animate position
    gsap.to(fireFly, {
      x: () => getRandom(-100, 100), // Random x position
      y: () => getRandom(-100, 100), // Random y position
      duration: () => getRandom(6, 10), // Slower random duration for movement
      repeat: -1, // Infinite repeat
      yoyo: true, // Yoyo effect
      ease: "power1.inOut" // Easing function
    });

    // Animate opacity for flickering effect
    gsap.to(fireFly, {
      opacity: () => getRandom(0.3, 1), // Random opacity between 0.3 and 1
      duration: () => getRandom(1, 3), // Random duration for flicker
      repeat: -1, // Infinite repeat
      yoyo: true, // Yoyo effect for smooth flickering
      ease: "power1.inOut" // Easing function
    });
  });
}

// Call the function to start the animation
animateFireFlies();

// Hide fireflies on page load
window.addEventListener('load', function () {
  const fireFliesContainer = document.querySelector('.fireFlies');
  if (fireFliesContainer) {
    fireFliesContainer.style.display = "none"; // Ensure fireflies are hidden initially
  }
});

// Add event listener to the vine rope
const vineRope = document.querySelector("#vine-rope");
let isNightTime = false; // Track the current scene state

vineRope.addEventListener("click", function () {
  if (!isNightTime) {
    // Change to nighttime
    document.body.style.transition = "background-color 1s ease";
    document.body.style.backgroundColor = "#2c3e50"; // Dark blue for nighttime effect

    // Show fireflies
    const fireFliesContainer = document.querySelector('.fireFlies');
    fireFliesContainer.style.display = "block"; // Make fireflies visible

    // Hide bird and music notes
    const bird = document.querySelector('.bird');
    const musicNotes = document.querySelectorAll('.music1, .music2, .music3');
    if (bird) bird.style.display = "none"; // Hide the bird
    musicNotes.forEach(note => note.style.display = "none"); // Hide music notes

    console.log("Scene changed to nighttime");
  } else {
    // Change back to daytime
    document.body.style.transition = "background-color 1s ease";
    document.body.style.backgroundColor = "#ffffff"; // White for daytime effect

    // Hide fireflies
    const fireFliesContainer = document.querySelector('.fireFlies');
    fireFliesContainer.style.display = "none"; // Hide fireflies

    // Show bird and music notes
    const bird = document.querySelector('.bird');
    const musicNotes = document.querySelectorAll('.music1, .music2, .music3');
    if (bird) bird.style.display = "block"; // Show the bird
    musicNotes.forEach(note => note.style.display = "block"); // Show music notes

    console.log("Scene changed to daytime");
  }

  // Toggle the scene state
  isNightTime = !isNightTime;
});

gsap.from(".bird", {
  opacity: 0,
  x: 30, // Start 200px to the right of its current position
  y: -30, // Start 200px above its current position
  delay: 3.5,
  duration: 1, // Adjust duration for a smooth slide-in effect
  ease: "power2.out" // Add easing for a natural flight effect
});

gsap.from(".music1, .music2, .music3", {
  opacity: 0,
  delay: 5,
});