"use strict";
//add to card
let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);
let addToCardBtns = document.querySelectorAll(".add-to-btn");
console.log(addToCardBtns);

/* for (let i = 0; i < addToCardBtns.length; i++) {
  addToCardBtns[i].addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
} */
addToCardBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
);
//like btn

let likeBtn = document.querySelectorAll(".like-pic");
console.log(likeBtn);
likeBtn.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("liked-pic");
  });
});

//
//
//More details
let moreDetailsBtn = document.querySelectorAll(".more-btn");

let modal = document.querySelector(".modal");

moreDetailsBtn.forEach((btn) => btn.addEventListener("click", openModal));
function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}
let close = document.querySelector(".btn-close");
close.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});
/*modal.addEventListener("keydown", function (e) {
  if (e.code === "Escape") {
    closeModal();
  }
});*/
//slider
$(".slider").slick({ dots: true });

//counter
function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };
  this.toggleButtonState = function () {
    let count = +this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };
  this.toggleButtonState();
  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };
  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };

  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );
  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
}
const incrementBtns = Array.from(
  document.querySelectorAll(".increment-button")
);
const decrementBtns = Array.from(
  document.querySelectorAll(".decrement-button")
);
const inputFields = Array.from(
  document.querySelectorAll(".product-quantity input")
);

const counter = {};

for (let i = 0; i < incrementBtns.length; i++) {
  counter[i] = new Counter(incrementBtns[i], decrementBtns[i], inputFields[i]);
}

console.log(counter);
