let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
const counter = document.querySelectorAll(".counter");
const speed = 100;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');


menu.onclick = function () {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = function () {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

counter.forEach((counter) => {
  const updateCount = () => {
    // Thêm + để chuyển string -> number
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = Math.round(target / speed);
    console.log(count);

    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };

  updateCount();
});

var swiper = new Swiper(".box-container", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
        slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  },
  loop: true,
  grabCursor :true,
});

let index = 0;
display(index);
function display (index) {
	slides.forEach((slide) => {
		slide.style.display = 'none';
	});
	slides[index].style.display = 'flex';
}

function nextSlide () {
	index++;
	if (index > slides.length - 1) {
		index = 0;
	}
	display(index);
}
function prevSlide () {
	index--;
	if (index < 0) {
		index = slides.length - 1;
	}
	display(index);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);






