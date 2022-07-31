// get elements from DOM
const btns = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closed = document.querySelector(".fa-xmark");

const showModal = function () {
  modal.style.display = "block";
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.style.display = "none";
  overlay.classList.add("hidden");
};

btns.forEach((btn) => {
  btn.addEventListener("click", showModal);
});

closed.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
