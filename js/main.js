// Modals

function openModal(modalId) {
  document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

document.getElementById("openSignIn").addEventListener("click", () => openModal("signInModal"));
document.getElementById("openSignUp").addEventListener("click", () => openModal("signUpModal"));
document.querySelectorAll(".close").forEach(closeBtn => {
  closeBtn.addEventListener("click", (e) => {
    closeModal(e.target.dataset.modal);
  });

});


window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    closeModal(e.target.id);
  }
});


// Video

const video = document.getElementById('about-video');
const playPauseButton = document.querySelector('.about__play-btn');
const playIconPath = './img/svg-icons/play.svg';
const pauseIconPath = './img/svg-icons/pause.svg';

playPauseButton.addEventListener('click', (e) => {
  e.preventDefault();

  const icon = playPauseButton.querySelector('img');

  if (video.paused) {
    video.play();
    icon.src = pauseIconPath;
    icon.alt = "Pause";
  } else {
    video.pause();
    icon.src = playIconPath;
    icon.alt = "Play";
  }
});


// Slider

const track = document.querySelector(".testimonial__track");
const cards = document.querySelectorAll(".testimonial__review-card");
const nextButton = document.querySelector(".testimonial__btn-next");

let current = 0;

function updateSlider() {
  const width = cards[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${current * width}px)`;
}

nextButton.addEventListener("click", () => {
  current = (current + 1) % cards.length;
  updateSlider();
});

window.addEventListener("resize", updateSlider);
updateSlider();


// Icons
document.addEventListener("DOMContentLoaded", function () {

  function animateOnView(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(animateOnView, {
    threshold: 0.5
  });

  const animatedSvgs = document.querySelectorAll('.svg-animated, .svg-animated-2');

  animatedSvgs.forEach(svg => {
    observer.observe(svg);
  });
});

// Mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const menuOpenBtn = document.getElementById('menu-open');
  const menuCloseBtn = document.getElementById('menu-close');
  const mobileMenu = document.getElementById('mobile-menu');

  const closeMenu = () => {
    mobileMenu.classList.remove('active');
    menuOpenBtn.style.display = 'block';
  };

  menuOpenBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    menuOpenBtn.style.display = 'none';
  });

  menuCloseBtn.addEventListener('click', closeMenu);


  document.addEventListener('click', (e) => {
    const isClickInside = mobileMenu.contains(e.target) || menuOpenBtn.contains(e.target);
    if (!isClickInside && mobileMenu.classList.contains('active')) {
      closeMenu();
    }
  });
});
