// header
const burger = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const menuLink = document.querySelector(".menu__list-link");
const body = document.body;
if (burger && menu) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("lock");
  });
  menuLink.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("lock");
  });
}

// ========about===========
let swiper = new Swiper(".about__swiper", {
  speed: 2500,
  loop: true,
  spaceBetween: 460,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".about__arrow-right",
    prevEl: ".about__arrow-left",
  },
});

// =========courses============

const course = document.querySelector(".courses");
const courseTitle = document.querySelector(".courses__title");
const courseMask = document.querySelector(".courses__mask");
const courseRight = document.querySelector(".courses__right");

// FadeIn
const fadeIn = (el, timeout, display) => {
  el.style.opacity = 0;
  el.style.display = display || "block";
  el.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
  }, 10);
};

// FadeOut
const fadeOut = (el, timeout) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;

  setTimeout(() => {
    el.style.display = "none";
  }, timeout);
};

course.addEventListener("mousemove", (event) => {
  // ширина экрана
  let viewportWidth = window.innerWidth;

  // координата X относительно элемента, на котором произошло событие
  const elementX = event.offsetX;

  if (elementX > viewportWidth / 2 + 100) {
   
    fadeIn(courseRight, 700);
    courseTitle.classList.add("color-gray");
  } else if (elementX < viewportWidth / 2 - 100) {
   
    fadeOut(courseMask, 700);
    courseTitle.classList.remove("color-gray");

   
  } else {
    
    fadeIn(courseMask, 700);
   
    fadeOut(courseRight, 700);
    courseTitle.classList.remove("color-gray");
  }
});

// =========teachers=======

const modal = new GraphModal();

const teachersBtn = document.querySelectorAll(".teachers__btn");
const about = document.querySelectorAll(".teachers__content");
const close = document.querySelectorAll(".teachers__close");

for (let item of teachersBtn) {
  item.addEventListener("click", function () {
    const content = document.querySelector("#" + item.dataset.teach);
    content.classList.add("active");

    for (i of close) {
      i.addEventListener("click", function () {
        content.classList.remove("active");
      });
    }
  });
}

let teachersSwiper = new Swiper(".teachers__swiper", {
  speed: 1300,
  loop: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },

  effect: "fade",
  navigation: {
    nextEl: ".teachers__arrow-right",
    prevEl: ".teachers__arrow-left",
  },
});

// ==========revievs===========
let reviewsSwiper = new Swiper(".reviews__swiper", {
  speed: 2600,
  
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  grabCursor: true,
  pagination: {
    el: ".reviews__pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      spaceBetween: 20,
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
      loop: false,
    },
  },
});

wow = new WOW({
  offset: 200, 
});
wow.init();

// ========= scroll =========
let scrollSwiper = new Swiper(".scroll-swiper", {
  speed: 1300,
  loop: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },

  // effect: "fade",
  // navigation: {
  //   nextEl: ".teachers__arrow-right",
  //   prevEl: ".teachers__arrow-left",
  // },
});
