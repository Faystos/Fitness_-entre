'use strict';

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
    this.sliderBtnNext.addEventListener('click', evt => {
      evt.preventDefault();
      this.sliderLeft();
    });
    this.sliderBtnBack.addEventListener('click', evt => {
      evt.preventDefault();
      this.sliderRigth();
    });
  }

  sliderLeft = () => {
    this.viewSlide += (this.sliderViewport + this.sliderMarginRight);
    console.log(this.viewSlide);
    if (this.viewSlide > (this.sliders.offsetWidth - (this.sliderViewport + this.sliderMarginRight))) {
      this.viewSlide = 0;
    } else {
      this.viewSlid = this.sliders.offsetWidth - (this.sliderViewport + this.sliderMarginRight);
    }
    this.sliders.style.right = `${this.viewSlide}px`;
  }

  sliderRigth = () => {
    this.viewSlide -= (this.sliderViewport + this.sliderMarginRight);
    this.viewSlide = this.viewSlide < 0 ? (this.sliders.offsetWidth - (this.sliderViewport + this.sliderMarginRight)) : this.viewSlide;
    this.sliders.style.right = `${this.viewSlide}px`;
  }
}

new Slider('coaches');
