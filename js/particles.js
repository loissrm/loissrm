particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});


//flecha hacia abajo
document.querySelector('.scroll-arrow').addEventListener('click', () => {
  const target = document.querySelector('#sobremi');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});


