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




const sr = ScrollReveal({
    origin : "top",
    distance :'60px',
    duration :'2500',
    delay :'300',
    reset :true
})

sr.reveal('.home_data, .about_top,.popular_top,.review_top,.review_swiper,.footer_icon,.footer_content,.copy_right,.footer_email')
sr.reveal('.home_img',{delay:500,scale:0.5})
sr.reveal('.services_card, .popular_card',{interval:100})
sr.reveal('.about_leaf',{delay:1000,origin:'right'})
sr.reveal('.about_item_1-content,.about_item_2-img',{origin:'right'})
sr.reveal('.about_item_2-content,.about_item_1-img',{origin:'left'})
sr.reveal('.review_leaf, .footer_floral',{delay:1000, origin:'left'})
