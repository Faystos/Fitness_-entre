'use strict';
class Tabs {
  constructor(controls, tabElements) {
    this.controls = document.querySelectorAll(`.${controls}`);
    this.controlArr = Array.prototype.slice.call(this.controls);
    this.tabElements = document.querySelectorAll(`.${tabElements}`);
    this.tabElementArr = Array.prototype.slice.call(this.tabElements);
    this.initDropdown();
  }

  initDropdown () {
    this.controlArr.forEach((el, i, arr) => {
      el.addEventListener('click', ({ target }) => {
        this.toggleClassBtn(arr, target);
        this.toggleTab(this.tabElementArr, i);
      });

    });
  }

  toggleClassBtn = (arrBtn, target) =>{
    arrBtn.forEach(el => el.classList.remove('subscription__tab_control--active'));
    target.classList.add('subscription__tab_control--active');
  };

  toggleTab = (arr, i) => {
    arr.forEach((tab, index, array) => {
      tab.classList.remove('subscription__tabs--active');
      if (i === index) {
        tab.classList.add('subscription__tabs--active');
      }
    });
  };
}

new Tabs('subscription__tab_control', 'subscription__tabs');
