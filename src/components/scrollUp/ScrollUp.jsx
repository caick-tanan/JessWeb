import React from 'react';
import "./scrollUp.css";

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        // Quando o Sroll for maior que 560 ViewPort de altura, será adicionado o "show-croll" class
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });
  return (
    <div>
      <a href="#home" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </div>
  );
};

export default ScrollUp
