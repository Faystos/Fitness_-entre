'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var MaskTel = /*#__PURE__*/function () {
    function MaskTel() {
      var _this = this;

      _classCallCheck(this, MaskTel);

      _defineProperty(this, "handlerMaskInp", function () {
        _this.inputsTelArr.forEach(function (el) {
          var mask = IMask(el, {
            mask: '+{7}(000)000-00-00'
          });
          el.addEventListener('focus', function () {
            el.value = '+7(';
          });
          el.addEventListener('blur', function () {
            if (el.value.length <= 2) el.value = '';
          });
        });
      });

      this.inputsTel = document.querySelectorAll('input[type="tel"]');
      this.inputsTelArr = Array.prototype.slice.call(this.inputsTel);
      this.maskInit();
    }

    _createClass(MaskTel, [{
      key: "maskInit",
      value: function maskInit() {
        this.handlerMaskInp();
      }
    }]);

    return MaskTel;
  }();

  new MaskTel();
})();

'use strict';

(function () {
  var Slider = /*#__PURE__*/function () {
    function Slider(slider) {
      var _this2 = this;

      _classCallCheck(this, Slider);

      _defineProperty(this, "sliderLeft", function () {
        _this2.viewSlide += _this2.sliderViewport + _this2.sliderMarginRight;

        if (_this2.viewSlide > _this2.sliders.offsetWidth - (_this2.sliderViewport + _this2.sliderMarginRight)) {
          _this2.viewSlide = 0;
        } else {
          _this2.viewSlid = _this2.sliders.offsetWidth - (_this2.sliderViewport + _this2.sliderMarginRight);
        }

        _this2.sliders.style.right = "".concat(_this2.viewSlide, "px");
      });

      _defineProperty(this, "sliderRight", function () {
        _this2.viewSlide -= _this2.sliderViewport + _this2.sliderMarginRight;
        _this2.viewSlide = _this2.viewSlide < 0 ? _this2.sliders.offsetWidth - (_this2.sliderViewport + _this2.sliderMarginRight) : _this2.viewSlide;
        _this2.sliders.style.right = "".concat(_this2.viewSlide, "px");
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
        var _this3 = this;

        this.sliderBtnNext.addEventListener("click", function (evt) {
          evt.preventDefault();

          _this3.sliderLeft();
        });
        this.sliderBtnBack.addEventListener("click", function (evt) {
          evt.preventDefault();

          _this3.sliderRight();
        });
      }
    }]);

    return Slider;
  }();

  new Slider("coaches");
  new Slider("reviews");
})();

'use strict';

(function () {
  var Scrolling = /*#__PURE__*/function () {
    function Scrolling() {
      _classCallCheck(this, Scrolling);

      this.linkNav = document.querySelectorAll('[href^="#"]');
      this.linkNavArr = Array.prototype.slice.call(this.linkNav);
      this.speed = 1;
      this.scrollInit();
    }

    _createClass(Scrolling, [{
      key: "scrollInit",
      value: function scrollInit() {
        var _this4 = this;

        this.linkNavArr.forEach(function (el) {
          el.addEventListener('click', function (evt) {
            evt.preventDefault();
            var speed = _this4.speed;
            var w = window.pageYOffset;
            var hash = evt.target.href.replace(/[^#]*(.*)/, '$1');
            var t = document.querySelector(hash).getBoundingClientRect().top;
            var start = null;
            requestAnimationFrame(step);

            function step(time) {
              if (start === null) start = time;
              var progress = time - start;
              var r = t < 0 ? Math.max(w - progress / speed, w + t) : Math.min(w + progress / speed, w + t);
              window.scrollTo(0, r);

              if (r != w + t) {
                requestAnimationFrame(step);
              } else {
                location.hash = hash;
              }
            }
          }, false);
        });
      }
    }]);

    return Scrolling;
  }();

  new Scrolling();
})();

'use strict';

(function () {
  var Tabs = /*#__PURE__*/function () {
    function Tabs(controls, tabElements) {
      _classCallCheck(this, Tabs);

      _defineProperty(this, "toggleClassBtn", function (arrBtn, target) {
        arrBtn.forEach(function (el) {
          return el.classList.remove("subscription__tab_control--active");
        });
        target.classList.add("subscription__tab_control--active");
      });

      _defineProperty(this, "toggleTab", function (arr, i) {
        arr.forEach(function (tab, index, array) {
          tab.classList.remove("subscription__tabs--active");

          if (i === index) {
            tab.classList.add("subscription__tabs--active");
          }
        });
      });

      this.controls = document.querySelectorAll(".".concat(controls));
      this.controlArr = Array.prototype.slice.call(this.controls);
      this.tabElements = document.querySelectorAll(".".concat(tabElements));
      this.tabElementArr = Array.prototype.slice.call(this.tabElements);
      this.initDropdown();
    }

    _createClass(Tabs, [{
      key: "initDropdown",
      value: function initDropdown() {
        var _this5 = this;

        this.controlArr.forEach(function (el, i, arr) {
          el.addEventListener("click", function (_ref) {
            var target = _ref.target;

            _this5.toggleClassBtn(arr, target);

            _this5.toggleTab(_this5.tabElementArr, i);
          });
        });
      }
    }]);

    return Tabs;
  }();

  new Tabs("subscription__tab_control", "subscription__tabs");
})();