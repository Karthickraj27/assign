// Countdown Timer
function startCountdown(duration, display) {
    let timer = duration;
    setInterval(function () {
      const hours = Math.floor((timer / 3600) % 24);
      const minutes = Math.floor((timer % 3600) / 60);
      const seconds = timer % 60;
  
      display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  
      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }
  
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  window.onload = function () {
    const countdownDisplay = document.getElementById('countdown');
    const countdownDuration = 600; // 10 minutes
    startCountdown(countdownDuration, countdownDisplay);
  };
  
  // Slide-Up Form
  document.getElementById('ctaBtn').addEventListener('click', function () {
    const formContainer = document.getElementById('slideForm');
    formContainer.style.display = 'flex';
  
    // Add animation class to slide up form
    formContainer.classList.add('slideInUp');
  });
  
  // Close the form when submitted
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const formContainer = document.getElementById('slideForm');
    formContainer.style.display = 'none';
  });
  
  // Additional Animation for Form
  document.getElementById('ctaBtn').addEventListener('mouseover', function () {
    // Add animation class to scale the button on hover
    this.classList.add('buttonScale');
  });
  
  document.getElementById('ctaBtn').addEventListener('mouseout', function () {
    // Remove animation class when mouse leaves the button
    this.classList.remove('buttonScale');
  });
  