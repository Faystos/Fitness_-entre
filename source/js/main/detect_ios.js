'use strict';

let title = document.querySelector('.description__text p');

// let detect = navigator.userAgent;
let detect = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
console.log(detect);

if (detect) {
  title.style.letterSpacing = 'none';
  title.textContent = "IOS";
}
