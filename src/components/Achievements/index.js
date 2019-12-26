import React from "react";
import Cards from "../Cards";
import "./style.scss";

class Achievements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: ""
    };
  }
  render() {
    return (
      <section className="fourth_section" id="achievements">
        <h1>List of Achievements ...</h1>
        <Cards
          image={"award-certificate.jpg"}
          heading={"Denmark India business Challenge - Nov 2014"}
          cardIndex={"01"}
          isModal={true}
          doc_title={"Denmark India business Challenge"}
          details={
            "Take participate in online competiton of business challenge and secure first position in all over India to win fully funded scholarship to denmark for web development course."
          }
          style={{
            left: "64%",
            position: "relative",
            height: "max-content",
            display: "inline-block",
            width: "max-content"
          }}
        />
        <Cards
          image={"zealand-win.jpg"}
          heading={"Certificate of Award by Zealand Institute"}
          cardIndex={"02"}
          isModal={true}
          doc_title={"Award of Certificate by Zealand Insitute"}
          details={
            "Award of certificate given by the zealnd Institute for the winning of the competition in Nov 2014."
          }
          style={{
            left: "10%",
            position: "relative",
            top: "-8rem",
            width: "max-content",
            height: "max-content"
          }}
        />
        <Cards
          image={"denmark-zealand_web_development.jpeg"}
          heading={"Highest Points in the Web Development"}
          cardIndex={"03"}
          isModal={true}
          doc_title={"Secured Highest Points in Web Development"}
          details={
            "Secured Highest Points in web development subject as 12 out 12 on MEAN stack web development."
          }
          style={{
            left: "64%",
            position: "relative",
            top: "-25%",
            height: "max-content",
            display: "inline-block",
            width: "max-content"
          }}
        />
        <Cards
          image={"zealand-win.jpg"}
          heading={"Certificate of Award by Zealand Institute"}
          cardIndex={"02"}
          isModal={true}
          doc_title={"Award of Certificate by Zealand Insitute"}
          details={
            "Award of certificate given by the zealnd Institute for the winning of the competition in Nov 2014."
          }
          style={{
            left: "10%",
            position: "relative",
            top: "-8rem",
            width: "max-content",
            height: "max-content"
          }}
        />
      </section>
    );
  }
}

export default Achievements;
