function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;
  // console.log(startPosition);
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  };


  requestAnimationFrame(animation);
}


var myWork = document.querySelector('.myWork');

myWork.addEventListener('click', function () {
  smoothScroll('.projects', 1000);
});

var myBlog = document.querySelector('.myBlog');

myBlog.addEventListener('click', function () {
  smoothScroll('.work', 1000);
});

var contactMe = document.querySelector('.contactMe');

contactMe.addEventListener('click', function () {
  smoothScroll('.contact', 2000);
});

var toTop = document.querySelector('.toTop');

toTop.addEventListener('click', function () {
  smoothScroll('.header', 1000);
});
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  var text = document.querySelector('.toTop');
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    text.style.opacity = 1;
    text.style.transform = "scale(1)";
  } else {
    text.style.opacity = 0;
    text.style.transform = "scale(0)";
  }
}


////////// event scroll \\\\\\\\\\\\\\\\\
function scrollAppear() {

  var text = document.querySelector('.projects-title');
  var titlePosition = text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if (titlePosition < screenPosition) {
    text.classList.add('scrolling');
  }

  var text = document.querySelector('.projects-items');
  var titlePosition = text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if (titlePosition < screenPosition) {
    text.classList.add('scrolling');
  }

  var text = document.querySelector('.projects-more');
  var titlePosition = text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if (titlePosition < screenPosition) {
    text.classList.add('scrolling');
  }

  var text = document.querySelector('.work-title');
  var titlePosition = text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if (titlePosition < screenPosition) {
    text.classList.add('scrolling');
  }

  var text = document.querySelector('.swiper-slides');
  var titlePosition = text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if (titlePosition < screenPosition) {
    text.classList.add('scrolling');
  }

  var text = document.querySelector('.contact-title');
  var titlePosition = text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if (titlePosition < screenPosition) {
    text.classList.add('scrolling');
  }

  var text = document.querySelector('.contact-us__left');
  var titlePosition = text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if (titlePosition < screenPosition) {
    text.classList.add('scrolling');
  }

  var text = document.querySelector('.contact-us__right');
  var titlePosition = text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;
  
  if (titlePosition < screenPosition) {
    text.classList.add('scrolling');
  }
}
window.addEventListener('scroll', scrollAppear);