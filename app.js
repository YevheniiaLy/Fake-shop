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

let form = document.querySelector(".main-form");

let overlay = document.querySelector(".overlay");

moreDetailsBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    form.style.display = "block";
    overlay.style.display = "block";
  })
);
let close = document.querySelector(".btn-close");
close.addEventListener("click", function () {
  form.style.display = "none";
  overlay.style.display = "none";
});
