let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
const counter = document.querySelectorAll(".counter");
const speed = 100;

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
