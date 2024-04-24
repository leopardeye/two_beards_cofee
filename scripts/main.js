const hamburgerWrapper = document.querySelector('.hamburger-wrapper');
const mainMenu = document.querySelector('.main-menu');
const menuWrapper = document.querySelector('.menu-wrapper');
const vertText = document.querySelector('.vert-text-animation');
const heroImageAnimate = document.querySelector('.hero-img-animate');

let lastScrollTop = 0; // Define lastScrollTop here

function toggleActiveClass(event) {
  event.stopPropagation();
  hamburgerWrapper.classList.toggle('active');
  mainMenu.classList.toggle('active');
}

function removeActiveClass() {
  hamburgerWrapper.classList.remove('active');
  mainMenu.classList.remove('active');
}

function handleScroll() {
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
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Update lastScrollTop here
}

hamburgerWrapper.addEventListener('click', toggleActiveClass);
document.addEventListener('click', removeActiveClass);
window.addEventListener('scroll', handleScroll, false);



// Check if the current page is methods.html
if (window.location.pathname.includes('methods')) {
  // methods script to change descriptions

  // Function to remove active class from all divs
  function removeMethodActiveClass() {
    var allElements = document.querySelectorAll('.grid-image-method, .description');
    allElements.forEach(function(element) {
      element.classList.remove('active');
      var img = element.querySelector('img');
      if (img) {
        img.classList.remove('active');
      }
    });
    var methodWrapperChildren = document.querySelector('.method-wrapper').children;
    Array.from(methodWrapperChildren).forEach(function(child) {
      child.classList.remove('active');
    });
  }

  function addActiveClass(element) {
    element.classList.add('active');
    var img = element.querySelector('img');
    if (img) {
      img.classList.add('active');
    }
    var sameIdElements = document.querySelectorAll('#' + element.id);
    sameIdElements.forEach(function(sameIdElement) {
      sameIdElement.classList.add('active');
    });
  }

  var methods = document.querySelectorAll('.insert-grid-img-method .grid-image-method');

  var randomIndex = Math.floor(Math.random() * methods.length);
  addActiveClass(methods[randomIndex]);

  methods.forEach(function(method) {
    method.addEventListener('click', function() {
      removeMethodActiveClass();
      addActiveClass(this);
    });
  });
}


// Select all images with the .fade-in class
var imgs = document.querySelectorAll('.fade-in');

// Loop over the images
imgs.forEach(function(img) {
  // Create an Intersection Observer for each image
  var observer = new IntersectionObserver(function(entries) {
    // Loop over the entries
    entries.forEach(function(entry) {
      // If the element is entering the viewport
      if (entry.isIntersecting) {
        // Add the .fade-in-animate class to animate the image
        img.classList.add('fade-in-animate');
        img.classList.remove('fade-out-animate');
      } else {
        // Otherwise, add the .fade-out-animate class to animate the image back
        img.classList.remove('fade-in-animate');
        img.classList.add('fade-out-animate');
      }
    });
  }, { rootMargin: '0px 0px -50px 0px' });

  // Start observing the image
  observer.observe(img);
});

// Select all elements with the .transition-left class
var textTransitionInLeft = document.querySelectorAll('.transition-left');

// Loop over the elements
textTransitionInLeft.forEach(function(textTransitionInLeft) {
  // Create an Intersection Observer for each element
  var observer = new IntersectionObserver(function(entries) {
    // Loop over the entries
    entries.forEach(function(entry) {
      // If the element is entering the viewport and the intersection ratio is above the threshold
      if (entry.isIntersecting) {
        // Add the .slide-in-animate class to animate the element
        textTransitionInLeft.classList.add('slide-in-animate');
        textTransitionInLeft.classList.remove('slide-out-animate');
      } else {
        // Otherwise, add the .slide-out-animate class to animate the element back
        textTransitionInLeft.classList.remove('slide-in-animate');
        textTransitionInLeft.classList.add('slide-out-animate');
      }
    });
  }, { rootMargin: '0px 0px -100px 0px' });

  // Start observing the element
  observer.observe(textTransitionInLeft);
});


// Select all .map-location elements
var mapLocations = document.querySelectorAll('.map-location');

// Loop over the .map-location elements
mapLocations.forEach(function(mapLocation) {
  // Generate a random delay between 0.5 and 1 seconds
  var delay = (Math.random() * 0.5 + 0.5).toFixed(2) + 's';

  // Set the animation-delay property for the .map-location element
  mapLocation.style.animationDelay = delay;

  // Create an Intersection Observer for each .map-location element
  var observer = new IntersectionObserver(function(entries) {
    // Loop over the entries
    entries.forEach(function(entry) {
      // If the .map-location element is entering the viewport
      if (entry.isIntersecting) {
        // Add the .opacity-in-animation class
        mapLocation.classList.add('opacity-in-animation');
        mapLocation.classList.remove('opacity-out-animation');
      } else {
        // Otherwise, add the .opacity-out-animation class
        mapLocation.classList.remove('opacity-in-animation');
        mapLocation.classList.add('opacity-out-animation');
      }
    });
  });

  // Start observing the .map-location element
  observer.observe(mapLocation);
});

// Select all .testimonial-wrapper elements
var testimonialWrapper = document.querySelectorAll('.testimonial-wrapper');

// Loop over the .map-location elements
testimonialWrapper.forEach(function(testimonialWrapper) {
  // Generate a random delay between 0.5 and 1 seconds

  // Create an Intersection Observer for each .map-location element
  var observer = new IntersectionObserver(function(entries) {
    // Loop over the entries
    entries.forEach(function(entry) {
      // If the .map-location element is entering the viewport
      if (entry.isIntersecting) {
        // Add the .opacity-in-animation class
        testimonialWrapper.classList.add('scale-in-animate');
        testimonialWrapper.classList.remove('scale-out-animate');
      } else {
        // Otherwise, add the .opacity-out-animation class
        testimonialWrapper.classList.remove('scale-in-animate');
        testimonialWrapper.classList.add('scale-out-animate');
      }
    });
  });

  // Start observing the .map-location element
  observer.observe(testimonialWrapper);
});

// Select all .testimonial-wrapper elements
var testimonialWrapperTwo = document.querySelectorAll('.testimonial-wrapper-2');

// Loop over the .map-location elements
testimonialWrapperTwo.forEach(function(testimonialWrapperTwo) {
  // Generate a random delay between 0.5 and 1 seconds

  // Create an Intersection Observer for each .map-location element
  var observer = new IntersectionObserver(function(entries) {
    // Loop over the entries
    entries.forEach(function(entry) {
      // If the .map-location element is entering the viewport
      if (entry.isIntersecting) {
        // Add the .opacity-in-animation class
        testimonialWrapperTwo.classList.add('scale-in-animate');
        testimonialWrapperTwo.classList.remove('scale-out-animate');
      } else {
        // Otherwise, add the .opacity-out-animation class
        testimonialWrapperTwo.classList.remove('scale-in-animate');
        testimonialWrapperTwo.classList.add('scale-out-animate');
      }
    });
  });

  // Start observing the .map-location element
  observer.observe(testimonialWrapperTwo);
});



// Select all .testimonial-wrapper elements
var imgShadowBox = document.querySelectorAll('.img-shadow-shadow-animation');

// Loop over the .map-location elements
imgShadowBox.forEach(function(testimonialWrapperTwo) {
  // Generate a random delay between 0.5 and 1 seconds

  // Create an Intersection Observer for each .map-location element
  var observer = new IntersectionObserver(function(entries) {
    // Loop over the entries
    entries.forEach(function(entry) {
      // If the .map-location element is entering the viewport
      if (entry.isIntersecting) {
        // Add the .opacity-in-animation class
        testimonialWrapperTwo.classList.add('opacity-in-animation');
        testimonialWrapperTwo.classList.remove('opacity-out-animation');
      } else {
        // Otherwise, add the .opacity-out-animation class
        testimonialWrapperTwo.classList.remove('opacity-in-animation');
        testimonialWrapperTwo.classList.add('opacity-out-animation');
      }
    });
  }, { rootMargin: '0px 0px -50px 0px' });

  // Start observing the .map-location element
  observer.observe(testimonialWrapperTwo);
});