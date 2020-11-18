'use strict';

(function() {
  class FormValidation {
    constructor(selector) {
      this.form = document.querySelector(`.${selector} form`);
      this.submitBtn =  this.form.querySelector(`.${selector}__feedback_submit`);
      this.inputName = this.form.querySelector(`input[type=text`);
      this.inputTel = this.form.querySelector(`input[type=tel`);
      this.initValidation();
    }

    initValidation () {
      this.submitBtn.addEventListener('click', this.handlerForm);

      this.inputName.addEventListener('input', () => {
        this.inputName.setCustomValidity('');
      });

      this.inputTel.addEventListener('input', () => {
        this.inputTel.setCustomValidity('');
      });
    }

    handlerForm = evt => {
      if(!this.inputsValidation()) {
        return;
      }
      evt.preventDefault();
      this.handlerDataSubmit();
    }

    inputNameValidation = input => {
      if(!input.value.length) {
        input.setCustomValidity('Введите имя');
        return false;
      } else if(input.value.length <= 3) {
        input.setCustomValidity('Слишком короткое имя');
        return false;
      }
      return true;
    }

    inputTelValidation = input => {
      if(!input.value.length === 2) {
        input.setCustomValidity('Введите номер телефона');
        return false;
      } else if (input.value.length >= 3 && input.value.length < 16) {
        input.setCustomValidity('Введите корректный номер телефона');
        return false;
      }

      return true;
    }

    inputsValidation = () => {
      if (this.inputName.value.length) {
        let chekInput = this.inputNameValidation(this.inputName);
        if (!chekInput) {
          return false;
        }
      }

      if (this.inputName.value.length) {
        let chekInput = this.inputTelValidation(this.inputTel);
        if (!chekInput) {
          return false;
        }
      }

      if(!this.inputName.validationMessage && !this.inputTel.validationMessage) {
        return true;
      }
    }

    handlerDataSubmit = () => {
      this.form.reset();
    }
  }

  new FormValidation('contacts');
})();
