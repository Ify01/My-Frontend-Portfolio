import React from "react";
import "./Scroll.css";

const scroll = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = this.document.querySelector(".scrollup");
    // when the scroll is higher than 560 viewport
    if (this.scrollY >= 560) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  });

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup-icon"></i>
    </a>
  );
};

export default scroll;
