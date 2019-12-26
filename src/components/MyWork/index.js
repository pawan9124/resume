import React from "react";
import Cards from "../Cards";
import "./style.scss";

class MyWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: ""
    };
  }
  render() {
    return (
      <section className="thrid_section" id="my_work">
        <div className="bullet"></div>
        <h1>Selected Web projects ...</h1>
        <Cards
          image={"stickyphoto.png"}
          heading={"StickyPhoto to share your journey"}
          cardIndex={"01"}
          isModal={false}
          link={"https://stickyphoto.herokuapp.com/"}
          doc_title={"StickyPhoto to share your journey"}
          details={["React", "Webpack", "Nodejs", "MongoDB", "Express"]}
          style={{
            left: "10%",
            position: "relative",
            height: "max-content",
            width: "max-content"
          }}
        />
        <Cards
          image={"modocop.png"}
          heading={"Responsive design for model corporation."}
          cardIndex={"02"}
          isModal={false}
          doc_title={"Find your best Model"}
          details={["React", "CSS", "HTML", "Responsive Design"]}
          link={"https://stickyphoto.herokuapp.com/"}
          style={{
            left: "64%",
            position: "relative",
            top: "-8rem",
            display: "inline-block",
            height: "max-content",
            width: "max-content"
          }}
        />
        <Cards
          image={"oncetaste.png"}
          heading={"Responsive design for restaurant"}
          cardIndex={"03"}
          isModal={false}
          doc_title={"Taste everything once"}
          details={["React", "CSS", "HTML", "Responsive Design"]}
          link={"https://oncetaste.herokuapp.com/"}
          style={{
            left: "11%",
            position: "relative",
            top: "-25%",
            height: "max-content",
            width: "max-content"
          }}
        />
        <Cards
          image={"casinowar.png"}
          heading={"Javascript game of casino slot."}
          cardIndex={"04"}
          isModal={false}
          doc_title={"Play Avenger casino slot game"}
          details={["Javascript", "CSS", "HTML", "webpack"]}
          link={"https://casinowar.herokuapp.com/"}
          style={{
            left: "64%",
            position: "relative",
            top: "-8rem",
            display: "inline-block",
            height: "max-content",
            width: "max-content"
          }}
        />
        <Cards
          image={"collegetalks.png"}
          heading={"Responsive social network site"}
          cardIndex={"03"}
          isModal={false}
          doc_title={"Know your mates"}
          details={["Angular", "Mongodb", "Express", "Node"]}
          link={"https://collegetalksv2.herokuapp.com/"}
          style={{
            left: "11%",
            position: "relative",
            top: "-25%",
            height: "max-content",
            width: "max-content"
          }}
        />
      </section>
    );
  }
}

export default MyWork;
