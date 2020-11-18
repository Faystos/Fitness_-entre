'use strict';
(function() {

  class Slider {
    constructor(slider) {
      //Управление слайдером
      this.sliderControl = document.querySelector(`.${slider}__slider_control`);
      this.sliderBtnNext = this.sliderControl.querySelector(`.${slider}__button_next`);
      this.sliderBtnBack = this.sliderControl.querySelector(`.${slider}__button_back`);

      //Слайдер
      this.sliderBlock = document.querySelector(`.${slider}__slider_block`);
      this.sliderViewport = this.sliderBlock.offsetWidth;
      this.sliders = this.sliderBlock.querySelector(`.${slider}__sliders`);
      this.right = parseInt(window.getComputedStyle(this.sliders, null).getPropertyValue("right"));
      this.slider = this.sliders.querySelector(`.${slider}__slider_item`);
      this.sliderMarginRight = parseInt(window.getComputedStyle(this.slider, null).getPropertyValue("margin-right"));
      this.viewSlide = this.right;
      this.sliderInit();
    }

    sliderInit () {
      this.sliderBtnNext.addEventListener(`click`, evt => {
        evt.preventDefault();
        this.sliderLeft();
      });
      this.sliderBtnBack.addEventListener(`click`, evt => {
        evt.preventDefault();
        this.sliderRight();
      });
    }

    sliderLeft = () => {
      this.viewSlide += (this.sliderViewport + this.sliderMarginRight);
      if (this.viewSlide > (this.sliders.offsetWidth - (this.sliderViewport + this.sliderMarginRight))) {
        this.viewSlide = 0;
      } else {
        this.viewSlid = this.sliders.offsetWidth - (this.sliderViewport + this.sliderMarginRight);
      }
      this.sliders.style.right = `${this.viewSlide}px`;
    }

    sliderRight = () => {
      this.viewSlide -= (this.sliderViewport + this.sliderMarginRight);
      this.viewSlide = this.viewSlide < 0 ? (this.sliders.offsetWidth - (this.sliderViewport + this.sliderMarginRight)) : this.viewSlide;
      this.sliders.style.right = `${this.viewSlide}px`;
    }
  }

  class SwipeSlider extends Slider {
    constructor(slider) {
      super(slider);

      //swipe
      this.posInit = 0;
      this.posX1 = 0;
      this.posX2 = 0;
      this.posFinal = 0;
      this.posThreshold = this.sliderViewport * 0.35;

      this.sliderInit();
    }

    sliderInit () {
      this.sliderBlock.addEventListener('touchstart', this.handlerSwipeSlider);
    }

    handlerSwipeSlider = (evt) => {
      let {sliderLeft, sliderRight, posX1, posInit, posX2, posFinal, posThreshold} = this;
      posInit = posX1 = evt.changedTouches[0].clientX;

      evt.target.addEventListener('touchmove', handlerTouchMove);
      evt.target.addEventListener('touchend', handlerTouchEnd);

      function handlerTouchMove(evtMove) {
        posX2 = posX1 - evtMove.changedTouches[0].clientX;
        posX1 = evtMove.changedTouches[0].clientX;
      }

      function handlerTouchEnd() {
        posFinal = posInit - posX1;
        evt.target.removeEventListener('touchmove', handlerTouchMove);
        evt.target.removeEventListener('touchend', handlerTouchEnd);

        if (Math.abs(posFinal) > posThreshold) {
          if (posInit < posX1) {
            sliderRight();
          } else if (posInit > posX1) {
            sliderLeft();
          }
        }
      }
    }
  }

  new Slider(`coaches`);
  new Slider(`reviews`);
  new SwipeSlider(`coaches`);
  new SwipeSlider(`reviews`);
})();
