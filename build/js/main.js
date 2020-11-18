'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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

  var SwipeSlider = /*#__PURE__*/function (_Slider) {
    _inherits(SwipeSlider, _Slider);

    var _super = _createSuper(SwipeSlider);

    function SwipeSlider(slider) {
      var _this4;

      _classCallCheck(this, SwipeSlider);

      _this4 = _super.call(this, slider); //swipe

      _defineProperty(_assertThisInitialized(_this4), "handlerSwipeSlider", function (evt) {
        var _assertThisInitialize = _assertThisInitialized(_this4),
            sliderLeft = _assertThisInitialize.sliderLeft,
            sliderRight = _assertThisInitialize.sliderRight,
            posX1 = _assertThisInitialize.posX1,
            posInit = _assertThisInitialize.posInit,
            posX2 = _assertThisInitialize.posX2,
            posFinal = _assertThisInitialize.posFinal,
            posThreshold = _assertThisInitialize.posThreshold;

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
      });

      _this4.posInit = 0;
      _this4.posX1 = 0;
      _this4.posX2 = 0;
      _this4.posFinal = 0;
      _this4.posThreshold = _this4.sliderViewport * 0.35;

      _this4.sliderInit();

      return _this4;
    }

    _createClass(SwipeSlider, [{
      key: "sliderInit",
      value: function sliderInit() {
        this.sliderBlock.addEventListener('touchstart', this.handlerSwipeSlider);
      }
    }]);

    return SwipeSlider;
  }(Slider);

  new Slider("coaches");
  new Slider("reviews");
  new SwipeSlider("coaches");
  new SwipeSlider("reviews");
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
        var _this5 = this;

        this.linkNavArr.forEach(function (el) {
          el.addEventListener('click', function (evt) {
            evt.preventDefault();
            var speed = _this5.speed;
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
        var _this6 = this;

        this.controlArr.forEach(function (el, i, arr) {
          el.addEventListener("click", function (_ref) {
            var target = _ref.target;

            _this6.toggleClassBtn(arr, target);

            _this6.toggleTab(_this6.tabElementArr, i);
          });
        });
      }
    }]);

    return Tabs;
  }();

  new Tabs("subscription__tab_control", "subscription__tabs");
})();

'use strict';

(function () {
  var FormValidation = /*#__PURE__*/function () {
    function FormValidation(selector) {
      var _this7 = this;

      _classCallCheck(this, FormValidation);

      _defineProperty(this, "handlerForm", function (evt) {
        if (!_this7.inputsValidation()) {
          return;
        }

        evt.preventDefault();

        _this7.handlerDataSubmit();
      });

      _defineProperty(this, "inputNameValidation", function (input) {
        if (!input.value.length) {
          input.setCustomValidity('Введите имя');
          return false;
        } else if (input.value.length <= 3) {
          input.setCustomValidity('Слишком короткое имя');
          return false;
        }

        return true;
      });

      _defineProperty(this, "inputTelValidation", function (input) {
        if (!input.value.length === 2) {
          input.setCustomValidity('Введите номер телефона');
          return false;
        } else if (input.value.length >= 3 && input.value.length < 16) {
          input.setCustomValidity('Введите корректный номер телефона');
          return false;
        }

        return true;
      });

      _defineProperty(this, "inputsValidation", function () {
        if (_this7.inputName.value.length) {
          var chekInput = _this7.inputNameValidation(_this7.inputName);

          if (!chekInput) {
            return false;
          }
        }

        if (_this7.inputName.value.length) {
          var _chekInput = _this7.inputTelValidation(_this7.inputTel);

          if (!_chekInput) {
            return false;
          }
        }

        if (!_this7.inputName.validationMessage && !_this7.inputTel.validationMessage) {
          return true;
        }
      });

      _defineProperty(this, "handlerDataSubmit", function () {
        _this7.form.reset();
      });

      this.form = document.querySelector(".".concat(selector, " form"));
      this.submitBtn = this.form.querySelector(".".concat(selector, "__feedback_submit"));
      this.inputName = this.form.querySelector("input[type=text");
      this.inputTel = this.form.querySelector("input[type=tel");
      this.initValidation();
    }

    _createClass(FormValidation, [{
      key: "initValidation",
      value: function initValidation() {
        var _this8 = this;

        this.submitBtn.addEventListener('click', this.handlerForm);
        this.inputName.addEventListener('input', function () {
          _this8.inputName.setCustomValidity('');
        });
        this.inputTel.addEventListener('input', function () {
          _this8.inputTel.setCustomValidity('');
        });
      }
    }]);

    return FormValidation;
  }();

  new FormValidation('contacts');
})();