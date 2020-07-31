import React from 'react';
import './Sun.css';

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 12) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = ' <span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 210 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap ";
  document.body.appendChild(css);
};

function Sun() {
  return (
    <div class="sunContainer">
      <div class="sunShape"></div>
      <div class="sunAllt">
      <div class="sunText">A product designer who <span
      class="txt-rotate"
      data-period="2000"
      data-rotate='[ "empathizes.", "is humble.", "simplifies.", "is curious.", "codes.", "is driven."]'></span></div>
      <div class="sunLinks">
      <a class="sunLink1"
      href="https://medium.com/@shawnjr/personal-design-archive-61e30379f54f"
      target="_blank"
      rel="noopener noreferrer"
      >Work</a>
      <a class="sunLink2"
      href="https://medium.com/@shawnjr"
      target="_blank"
      rel="noopener noreferrer"
      >Writing</a>
      <a class="sunLink3"
      href="https://www.linkedin.com/in/shawnjr/"
      target="_blank"
      rel="noopener noreferrer">Contact</a>
    </div>
    </div>
    </div>
  );
}

export default Sun;