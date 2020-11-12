'use strict';
(function() {
  class MaskTel {
    constructor() {
      this.inputsTel = document.querySelectorAll('input[type="tel"]');
      this.inputsTelArr = Array.prototype.slice.call(this.inputsTel);
      this.maskInit();
    }

    maskInit() {
      this.handlerMaskInp();
    }

    handlerMaskInp = () => {
      this.inputsTelArr.forEach(el => {
        const mask = IMask(el, {mask: '+{7}(000)000-00-00'});
        el.addEventListener('focus', ()=>{
          el.value = '+7(';
        });
        el.addEventListener('blur', ()=>{
          if (el.value.length <= 2) el.value = '';
        });
      });
    }
  }
  new MaskTel();
})();


