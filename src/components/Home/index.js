import React from "react";
import Introduction from "../Introduction";
import Professional from "../Professional";
import MyWork from "../MyWork";
import Achievements from "../Achievements";
import Contact from "../Contact";
import Modal from "../Modal";
import "./style.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Introduction />
        <MyWork />
        <Achievements />
        <Professional />
        <Contact />
        <Modal />
      </div>
    );
  }
}

export default Home;
