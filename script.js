var listBtn = document.querySelector(".mobile-nav-toggle");
var navTog = document.querySelector("body");

listBtn.addEventListener("click", function () {
  listBtn.classList.toggle("bi-x");
  navTog.classList.toggle("mobile-nav-active");
});
var typed = new Typed('.typed', {
  strings: ['Designer', 'Developer', 'Freelancer'],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
});


$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    dots: true,
    dotsEach: true,
    cursor: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    responsive: {
      320: {
        items: 1,
      },
      1200: {
        items: 3,
      }
    }
  });
});

$('.portfolio-container').isotope({
  itemSelector: '.portfolio-item',
  transitionDuration: '0.6s'
});
$('#portfolio-flters').on('click', 'li', function () {
  var filterValue = $(this).attr('data-filter');
  $('.portfolio-container').isotope({
    filter: filterValue
  });
  $('#portfolio-flters li').removeClass('filter-active');
  $(this).addClass('filter-active');
  setTimeout(function () {
    $('.portfolio-container').isotope('layout');
  }, 600);
});

window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
});

const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}
const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

let navbarlinks = select('#navbar .scrollto', true)
const navbarlinksActive = () => {
  let position = window.scrollY + 200
  navbarlinks.forEach(navbarlink => {
    if (!navbarlink.hash) return
    let section = select(navbarlink.hash)
    if (!section) return
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      navbarlink.classList.add('active')
    } else {
      navbarlink.classList.remove('active')
    }
  })
}
window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive)

let skilsContent = select('.skills-content');
if (skilsContent) {
  new Waypoint({
    element: skilsContent,
    offset: '80%',
    handler: function (direction) {
      let progress = select('.progress .progress-bar', true);
      progress.forEach((el) => {
        el.style.width = el.getAttribute('aria-valuenow') + '%'
      });
    }
  })
}

window.addEventListener('load', () => {
  AOS.init({
    duration: 500,
    easing: 'ease-in-out',
    once: false,
    mirror: false
  })

});

// const portfolioLightbox = GLightbox({
//   selector: '.portfolio-lightbox'
// });


const skillsSection = document.getElementById('skills')

const progressBars = document.querySelectorAll('.progress-bar')

function showProgress() {
  progressBars.forEach(progressBar => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  })
}

function hideProgress() {
  progressBars.forEach(p => {
    p.style.opacity = 0;
    p.style.width = 0;
  })
}

window.addEventListener('scroll', () => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight /2;

  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
})