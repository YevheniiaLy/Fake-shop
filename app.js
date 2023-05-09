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
let likeImg1 = document.querySelector("#likePicImg1");
let likeBox1 = document.querySelector("#likePic1");
let likeImg2 = document.querySelector("#likePicImg2");
let likeBox2 = document.querySelector("#likePic2");
let likeImg3 = document.querySelector("#likePicImg3");
let likeBox3 = document.querySelector("#likePic3");
let likeImg4 = document.querySelector("#likePicImg4");
let likeBox4 = document.querySelector("#likePic4");
let likeImg5 = document.querySelector("#likePicImg5");
let likeBox5 = document.querySelector("#likePic5");
let likeImg6 = document.querySelector("#likePicImg6");
let likeBox6 = document.querySelector("#likePic6");
let likeImg7 = document.querySelector("#likePicImg7");
let likeBox7 = document.querySelector("#likePic7");
let likeImg8 = document.querySelector("#likePicImg8");
let likeBox8 = document.querySelector("#likePic8");
let likeImg9 = document.querySelector("#likePicImg9");
let likeBox9 = document.querySelector("#likePic9");
//console.log(likeImg1.getAttribute("src"));
//console.log(likeBox1);

function changeLikeSrc(likeImg) {
  if (likeImg.getAttribute("src") === "img/icon like.png") {
    likeImg.setAttribute("src", "img/icon like2.png");
  } else {
    likeImg.setAttribute("src", "img/icon like.png");
  }
}

likeBox1.addEventListener("click", function () {
  changeLikeSrc(likeImg1);
});
likeBox2.addEventListener("click", function () {
  changeLikeSrc(likeImg2);
});
likeBox3.addEventListener("click", function () {
  changeLikeSrc(likeImg3);
});
likeBox4.addEventListener("click", function () {
  changeLikeSrc(likeImg4);
});
likeBox5.addEventListener("click", function () {
  changeLikeSrc(likeImg5);
});
likeBox6.addEventListener("click", function () {
  changeLikeSrc(likeImg6);
});
likeBox7.addEventListener("click", function () {
  changeLikeSrc(likeImg7);
});
likeBox8.addEventListener("click", function () {
  changeLikeSrc(likeImg8);
});
likeBox9.addEventListener("click", function () {
  changeLikeSrc(likeImg9);
});
/* let likeBtn = document.querySelectorAll(".like-pic");
console.log(likeBtn);
likeBtn.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("liked-pic");
  });
});
 */
//
//
//More details
let moreDetailsBtn = document.querySelectorAll(".more-btn");

let modal = document.querySelector(".modal");

moreDetailsBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    modal.style.display = "block";
  })
);
let close = document.querySelector(".btn-close");
close.addEventListener("click", function () {
  modal.style.display = "none";
});
