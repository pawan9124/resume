import React from "react";
import "./style.scss";
import Typed from "typed.js";
import sal from "sal.js";

class Introduction extends React.Component {
  componentDidMount() {
    const options = {
      strings: ["FrontEnd", "Backend", "UI/UX"],
      typeSpeed: 40,
      loop: true
    };

    const typed = new Typed(".display_animated_text", options);
    sal({
      threshold: 1,
      once: true
    });

    //attaching the burger menu click
    document.getElementById("burger_menu_id").addEventListener("click", e => {
      console.log("CLICKed");
      document.getElementById("burger_menu_id").style.display = "none";
      document.getElementById("navigation_id").style.display = "block";
      document.getElementById("navigation_id").style.position = "fixed";
      document
        .getElementById("text-heading")
        .classList.add("display-text-heading");
      document
        .getElementById("close_menu_id")
        .classList.add("display-close-menu");
    });

    ////attaching the close menu click
    document.getElementById("close_menu_id").addEventListener("click", e => {
      console.log("CLICKed");
      document
        .getElementById("text-heading")
        .classList.remove("display-text-heading");
      document.getElementById("burger_menu_id").style.display = "block";
      document.getElementById("navigation_id").style.display = "none";
      document.getElementById("close_menu_id").style.display = "none";
    });

    console.log(
      "document.getElementsByClassName",
      document.getElementsByClassName("navigation")
    );

    //setting the navigation menu fixed and active
    let navigationChild = document.getElementsByClassName("nav-child");
    for (let i = 0; i < navigationChild.length; i++) {
      navigationChild[i].addEventListener("click", e => {
        let navG = document.getElementsByClassName("nav-child");
        for (let k = 0; k < navG.length; k++) {
          navG[k].classList.remove("active");
        }
        e.target.classList.add("active");
      });
    }

    //adding the background to the nav-bar
    window.onscroll = function() {
      if (document.documentElement.scrollTop > 100) {
        document
          .getElementById("navigation_id")
          .classList.add("nav-background");
      } else {
        document
          .getElementById("navigation_id")
          .classList.remove("nav-background");
      }
    };
  }
  render() {
    return (
      <section
        className="flex-container-row first_section"
        data-test="FirstComponent"
        id="home"
      >
        <div className="flex-child flex-container-column">
          <div className="flex-child intro-box">
            <div id="burger_menu_id" className="burger-menu"></div>
            <div id="close_menu_id" className="close-menu"></div>
            <ul id="navigation_id" className="navigation">
              <li>
                <a className="nav-child active" href="#home">
                  Home/>
                </a>
              </li>
              <li>
                <a className="nav-child" href="#my_work">
                  My Work/>
                </a>
              </li>
              <li>
                <a className="nav-child" href="#achievements">
                  Achievements/>
                </a>
              </li>
              <li>
                <a className="nav-child" href="#tech">
                  Tech/>
                </a>
              </li>
              <li>
                <a className="nav-child" href="#contact">
                  Contact/>
                </a>
              </li>
            </ul>
            <div id="text-heading" className="text-heading">
              <div className="bullet"></div>
              <div
                data-sal="zoom-in"
                data-sal-delay="300"
                data-sal-easing="ease-out-back"
              >
                <h1>
                  Hi, I am <span className="name">Pawan Saket</span>
                </h1>
                <p className="sub_heading_text">
                  I <i>design</i> and develop{" "}
                  <span className="display_animated_text"></span>
                </p>
                <p className="sub_heading_text_show">Let me show...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Introduction;
