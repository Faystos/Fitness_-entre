'use strict';

(function(){
class DetectIos {

  constructor (element) {
    this.detect = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    this.element = document.querySelector(`.${element}`);
    this.detectedIos();
  }

  detectedIos() {
    if (this.detect) {
      this.element.style.letterSpacing = '0';
    }
  }
}
})();




