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

/* moreDetailsBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    modal.style.display = "block";
  })
);
let close = document.querySelector(".btn-close");
close.addEventListener("click", function () {
  modal.style.display = "none";
}); */
