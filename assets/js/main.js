/**
* Template Name: MyResume
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

// CUSTOM JS CODES
const quotes = [
  { quote: "The camera is an instrument that teaches people how to see without a camera.", author: "Dorothea Lange" },
  { quote: "A portrait is not just a likeness. It's about capturing the essence of someone.", author: "Steve McCurry" },
  { quote: "Photography is the story I fail to put into words.", author: "Destin Sparks" },
  { quote: "You don't take a photograph, you make it.", author: "Ansel Adams" },
  { quote: "The best camera is the one that's with you.", author: "Chase Jarvis" },
  { quote: "We are making photographs to understand what our lives mean to us.", author: "Ralph Hattersley" },
  { quote: "The context in which a photograph is seen affects the meaning the viewer draws from it.", author: "Stephen Shore" },
  { quote: "Photographs are just light and time.", author: "Aza Holmes" },
  { quote: "The way that light hits objects, I think, is one of the more important things that sculpture and photography share.", author: "Rashid Johnson" },
  { quote: "Only photography has been able to divide human life into a series of moments, each of them has the value of a complete existence.", author: "Eadweard Muybridge" },
  { quote: "What do we feel when we look at a good photograph? We just want to be there, right at the exact moment that photo taken!", author: "Mehmet Murat Ildan" },
  { quote: "The picture that you took with your camera is the imagination you want to create with reality.", author: "Scott Lorenzo" },
  { quote: "Black and white are the colors of photography. To me, they symbolize the alternatives of hope and despair to which mankind is forever subjected.", author: "Robert Frank" },
  { quote: "If the photographer is interested in the people in front of his lens, and if he is compassionate, it’s already a lot. The instrument is not the camera but the photographer.", author: "Eve Arnold" },
  { quote: "Essentially what photography is life lit up.", author: "Sam Abell" },
  { quote: "I don’t trust words. I trust pictures.", author: "Gilles Peress" },
  { quote: "A good photograph is one that communicates a fact, touches the heart and leaves the viewer a changed person for having seen it. It is, in a word, effective.", author: "Irving Penn" },
  { quote: "To me, photography must suggest, not insist or explain.", author: "Brassai" },
  { quote: "If you want to be a better photographer, stand in front of more interesting stuff.", author: "Jim Richardson" },
  { quote: "I see more in black and white – I like the abstraction of it.", author: "Mary Ellen Mark" },
  { quote: "Black and white is abstract; color is not. Looking at a black and white photograph, you are already looking at a strange world.", author: "Joel Sternfeld" },
  { quote: "Your first 10,000 photographs are your worst.", author: "Henri Cartier-Bresson" },
  { quote: "For me, the camera is a sketchbook, an instrument of intuition and spontaneity.", author: "Henri Cartier-Bresson" },
  { quote: "When people look at my pictures I want them to feel the way they do when they want to read a line of a poem twice.", author: "Robert Frank" },
  { quote: "Without vision, the photographer perishes.", author: "David duChemin" },
  { quote: "A thing that you see in my pictures is that I was not afraid to fall in love with these people.", author: "Annie Leibovitz" },
  { quote: "Photography is all about secrets. The secrets we all have and will never tell.", author: "Kim Edwards" },
  { quote: "I wish that all of nature’s magnificence, the emotion of the land, the living energy of place could be photographed.", author: "Annie Leibovitz" },
  { quote: "The earth is art, the photographer is only a witness.", author: "Yann Arthus-Bertrand" },
  { quote: "Photograph: a picture painted by the sun without instruction in art.", author: "Ambrose Bierce" },
  { quote: "Wherever there is light, one can photograph.", author: "Alfred Stieglitz" },
  { quote: "With photography, you zero in; you put a lot of energy into short moments, and then you go on to the next thing.", author: "Robert Mapplethorpe" },
  { quote: "A camera is a SAVE button for the mind’s eye.", author: "Roger Kingston" },
  { quote: "Photography can never grow up if it imitates some other medium. It has to walk alone; it has to be itself.", author: "Berenice Abbott" },
  { quote: "Photography is a calling that requires vigilance and alertness for that moment in time that only occurs once.", author: "Caroline Mueller" },
  { quote: "Don’t pack up your camera until you’ve left the location.", author: "Joe McNally" },
  { quote: "In photography, the smallest thing can be a great subject. The little, human detail can become a Leitmotiv.", author: "Henri Cartier Bresson" },
  { quote: "A photograph is a secret about a secret. The more it tells you the less you know.", author: "Diane Arbus" },
];

let currentQuote;

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote(quote) {
    document.getElementById("quoteText").textContent = `“${quote.quote}”`;
    document.getElementById("quoteAuthor").textContent = `– ${quote.author}`;
}

function openPopup() {
  currentQuote = getRandomQuote();
  displayQuote(currentQuote);
  document.getElementById("quotePopup").style.display = "flex";
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = "0%";

  setTimeout(() => {
      progressBar.style.width = "100%";
  }, 10);

  timeoutId = setTimeout(closePopup, 6000); // Store the timeout ID
}

function closePopup() {
  clearTimeout(timeoutId); // Clear the timeout
  document.getElementById("quotePopup").style.display = "none";
}

// Event listener for the close button
const closeButton = document.getElementById("closeButton"); // Replace "closeButton" with the actual ID of your close button
if (closeButton) { // Check if the element exists
  closeButton.addEventListener("click", closePopup);
  console.log("Hi, I am Jia");
} else {
  console.error("Close button not found.  Check your HTML.");
}


const playButton = document.getElementById('playButton');
    const backgroundMusic = document.getElementById('backgroundMusic');

    playButton.addEventListener('click', () => {
      if (backgroundMusic.paused) {
        backgroundMusic.play();
        playButton.classList.add('playing'); // Add 'playing' class
      } else {
        backgroundMusic.pause();
        playButton.classList.remove('playing'); // Remove 'playing' class
      }
    });
    



(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();