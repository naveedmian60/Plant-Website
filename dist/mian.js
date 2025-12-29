const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("bx-x")
})
navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle("bx-x")
    });
});
const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 500,
  spaceBetween: 30,
  grabCursor: true,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});



/// Scroll Up button
const scrollUpBtn = document.getElementById("scroll-up");

window.addEventListener("scroll", function() {
    if (window.scrollY > 200) { 
        scrollUpBtn.classList.remove("-bottom-1/2"); 
        scrollUpBtn.classList.add("bottom-4");       
    } else {
        scrollUpBtn.classList.remove("bottom-4");
        scrollUpBtn.classList.add("-bottom-1/2");
    }
});


scrollUpBtn.addEventListener("click", function(e) {
    e.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Navbar element
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        navbar.classList.add("border-b", "border-yellow-500"); 
    } else {
        navbar.classList.remove("border-b", "border-yellow-500"); 
    }
});







const navLinks = document.querySelectorAll(".nav-link");


const sections = document.querySelectorAll("section"); 

window.addEventListener("scroll", function() {
    let current = "";

   
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70; 
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    
    navLinks.forEach(link => {
        link.classList.remove("text-yellow-500");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("text-yellow-500"); 
        }
    });
});



// ====================== ScrollReveal Setup ======================
const sr = ScrollReveal({
    distance: '20px',       
    duration: 800,
    easing: 'ease-out',
    reset: true            
});

// ====================== Navbar ======================
sr.reveal('#navbar', { origin: 'top', distance: '10px', duration: 600 });

// ====================== Home Section ======================
sr.reveal('#home h1', { origin: 'left', delay: 100 });
sr.reveal('#home p', { origin: 'bottom', delay: 200 });
sr.reveal('#home .btn', { origin: 'bottom', interval: 150, delay: 300 });
sr.reveal('#home img', { origin: 'right', delay: 400 });
sr.reveal('#home .animate-movingY', { origin: 'bottom', distance: '10px', interval: 300, duration: 1200 });

// ====================== About Section ======================
sr.reveal('#about h2', { origin: 'top', delay: 100 });
sr.reveal('#about p', { origin: 'bottom', delay: 200 });
sr.reveal('#about img', { origin: 'left', delay: 300 });
sr.reveal('#about .space-y-5 h3, #about .space-y-5 p', { origin: 'right', interval: 150, delay: 400 });

// ====================== Popular Section ======================
sr.reveal('#popular h2', { origin: 'top', delay: 100 });
sr.reveal('#popular p', { origin: 'bottom', delay: 200 });
sr.reveal('.popular_card', { origin: 'bottom', distance: '20px', interval: 150, delay: 300 });

// ====================== Review Section ======================
const swiperSlides = document.querySelectorAll('.swiper-slide');
swiperSlides.forEach((slide, index) => {
    sr.reveal(slide, {
        origin: 'bottom',
        distance: '20px',
        delay: index * 150
    });
});

// ====================== Footer ======================
sr.reveal('footer h3, footer p, footer a, footer input, footer button', {
    origin: 'bottom',
    distance: '20px',
    interval: 100,
    delay: 100
});
