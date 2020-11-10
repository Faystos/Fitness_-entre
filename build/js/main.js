'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Slider = /*#__PURE__*/function () {
  function Slider(slider) {
    var _this = this;

    _classCallCheck(this, Slider);

    _defineProperty(this, "sliderLeft", function () {
      _this.viewSlide += _this.sliderViewport + _this.sliderMarginRight;

      if (_this.viewSlide > _this.sliders.offsetWidth - (_this.sliderViewport + _this.sliderMarginRight)) {
        _this.viewSlide = 0;
      } else {
        _this.viewSlid = _this.sliders.offsetWidth - (_this.sliderViewport + _this.sliderMarginRight);
      }

      _this.sliders.style.right = "".concat(_this.viewSlide, "px");
    });

    _defineProperty(this, "sliderRigth", function () {
      _this.viewSlide -= _this.sliderViewport + _this.sliderMarginRight;
      _this.viewSlide = _this.viewSlide < 0 ? _this.sliders.offsetWidth - (_this.sliderViewport + _this.sliderMarginRight) : _this.viewSlide;
      _this.sliders.style.right = "".concat(_this.viewSlide, "px");
    });

    //Управление слайдером
    this.sliderControl = document.querySelector(".".concat(slider, "__slider_control"));
    this.sliderBtnNext = this.sliderControl.querySelector(".".concat(slider, "__button_next"));
    this.sliderBtnBack = this.sliderControl.querySelector(".".concat(slider, "__button_back")); //Слайдер

    this.sliderBlock = document.querySelector(".".concat(slider, "__slider_block"));
    this.sliderViewport = this.sliderBlock.offsetWidth;
    this.sliders = this.sliderBlock.querySelector(".".concat(slider, "__sliders"));
    this.right = parseInt(window.getComputedStyle(this.sliders, null).getPropertyValue("right"));
    this.slider = this.sliders.querySelector(".".concat(slider, "__slider_item"));
    this.sliderMarginRight = parseInt(window.getComputedStyle(this.slider, null).getPropertyValue("margin-right"));
    this.viewSlide = this.right;
    this.sliderInit();
  }

  _createClass(Slider, [{
    key: "sliderInit",
    value: function sliderInit() {
      var _this2 = this;

      this.sliderBtnNext.addEventListener('click', function (evt) {
        evt.preventDefault();

        _this2.sliderLeft();
      });
      this.sliderBtnBack.addEventListener('click', function (evt) {
        evt.preventDefault();

        _this2.sliderRigth();
      });
    }
  }]);

  return Slider;
}();

new Slider('coaches');
new Slider('reviews');