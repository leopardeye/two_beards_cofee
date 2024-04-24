const hamburgerWrapper = document.querySelector('.hamburger-wrapper');
const mainMenu = document.querySelector('.main-menu');
const menuWrapper = document.querySelector('.menu-wrapper');
const vertText = document.querySelector('.vert-text-animation');
const heroImageAnimate = document.querySelector('.hero-img-animate');

let lastScrollTop = 0;

function toggleClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

function toggleActiveClass(event) {
  event.stopPropagation();
  toggleClass(hamburgerWrapper, 'active');
  toggleClass(mainMenu, 'active');
}

document.addEventListener('click', () => {
  hamburgerWrapper.classList.remove('active');
  mainMenu.classList.remove('active');
});

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    menuWrapper.classList.add('hide-mw');
    heroImageAnimate.classList.add('hero-animate');
    vertText.classList.add('vert-animation');
  } else {
    menuWrapper.classList.remove('hide-mw');
    heroImageAnimate.classList.remove('hero-animate');
    vertText.classList.remove('vert-animation');
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

hamburgerWrapper.addEventListener('click', toggleActiveClass);

function observeElement(element, className, rootMargin) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        element.classList.add(className);
        element.classList.remove('fade-out-animate');
      } else {
        element.classList.remove(className);
        element.classList.add('fade-out-animate');
      }
    });
  }, { rootMargin });

  observer.observe(element);
}

document.querySelectorAll('.fade-in').forEach((img) => {
  observeElement(img, 'fade-in-animate', '0px 0px -50px 0px');
});

document.querySelectorAll('.transition-left').forEach((textTransitionInLeft) => {
  observeElement(textTransitionInLeft, 'slide-in-animate', '0px 0px -100px 0px');
});

document.querySelectorAll('.map-location').forEach((mapLocation) => {
  mapLocation.style.animationDelay = `${(Math.random() * 0.5 + 0.5).toFixed(2)}s`;
  observeElement(mapLocation, 'opacity-in-animation');
});

document.querySelectorAll('.testimonial-wrapper').forEach((testimonialWrapper) => {
  observeElement(testimonialWrapper, 'scale-in-animate');
});

document.querySelectorAll('.testimonial-wrapper-2').forEach((testimonialWrapperTwo) => {
  observeElement(testimonialWrapperTwo, 'scale-in-animate');
});

document.querySelectorAll('.img-shadow-shadow-animation').forEach((imgShadowBox) => {
  observeElement(imgShadowBox, 'opacity-in-animation', '0px 0px -50px 0px');
});

// Check if the current page is methods.html
if (window.location.pathname.includes('methods')) {
  // methods script to change descriptions

  // Function to remove active class from all divs
  function removeMethodActiveClass() {
    const allElements = document.querySelectorAll('.grid-image-method, .description');
    allElements.forEach(function(element) {
      element.classList.remove('active');
      const img = element.querySelector('img');
      if (img) {
        img.classList.remove('active');
      }
    });
    const methodWrapperChildren = document.querySelector('.method-wrapper').children;
    Array.from(methodWrapperChildren).forEach(function(child) {
      child.classList.remove('active');
    });
  }

  function addActiveClass(element) {
    element.classList.add('active');
    const img = element.querySelector('img');
    if (img) {
      img.classList.add('active');
    }
    const sameIdElements = document.querySelectorAll('#' + element.id);
    sameIdElements.forEach(function(sameIdElement) {
      sameIdElement.classList.add('active');
    });
  }

  const methods = document.querySelectorAll('.insert-grid-img-method .grid-image-method');

  const randomIndex = Math.floor(Math.random() * methods.length);
  addActiveClass(methods[randomIndex]);

  methods.forEach(function(method) {
    method.addEventListener('click', function() {
      removeMethodActiveClass();
      addActiveClass(this);
    });
  });
}
