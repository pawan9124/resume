import React from "react";
import "./style.scss";
import { createLine } from "../Professional/animation";

const data = [
  {
    line: "01",
    value: [{ class: "white", text: "{" }]
  },
  {
    line: "02",
    value: [
      { class: "grey", text: ".." },
      {
        class: "purple",
        text: "contact"
      },
      {
        class: "white",
        text: ":"
      },
      {
        class: "white",
        text: "{"
      }
    ]
  },
  {
    line: "03",
    value: [
      { class: "grey", text: "...." },
      {
        class: "yellow",
        text: "email"
      },
      {
        class: "white",
        text: ":"
      },
      {
        class: "green",
        text: "pawan_saket@rediffmail.com"
      }
    ]
  },
  {
    line: "04",
    value: [
      { class: "grey", text: "...." },
      {
        class: "yellow",
        text: "phone"
      },
      {
        class: "white",
        text: ":"
      },
      {
        class: "green",
        text: "+91-7742923664"
      }
    ]
  },
  {
    line: "05",
    value: [
      { class: "grey", text: "...." },
      {
        class: "yellow",
        text: "location"
      },
      {
        class: "white",
        text: ":"
      },
      {
        class: "green",
        text: "Delhi, India"
      }
    ]
  },
  {
    line: "06",
    value: [
      { class: "grey", text: ".." },
      { class: "white", text: "}" }
    ]
  },
  {
    line: "07",
    value: [{ class: "white", text: "}" }]
  }
];

class Contact extends React.Component {
  render() {
    const returnList = data.map((data, index) => {
      return (
        <div
          className="line"
          key={data.line + "contact" + index}
          dangerouslySetInnerHTML={{
            __html: createLine(data.line, data.value)
          }}
        ></div>
      );
    });
    const returnMedia = function(icons, link) {
      return (
        <li className="media-list">
          <a href={link} className="media" target="_blank">
            <img src={require(`../../images/${icons}`)} alt={icons} />
          </a>
        </li>
      );
    };
    return (
      <section className="sixth_section" id="contact">
        <h1>Contact/></h1>
        <div className="contact-container">{returnList}</div>
        <div className="social-media-section resume-container">
          <div className="resume-child resume-download">
            {/* <form method="get" action="../../images/background.jpg"> */}
            <button
              type="submit"
              onClick={() =>
                window.open(require(`../../docs/resume/pawan_resume.pdf`))
              }
              className="btn btn-secondary"
            >
              Download Resume
            </button>
            {/* </form> */}
          </div>
          <ul className="resume-child media-section">
            {returnMedia(
              "facebook.svg",
              "https://www.facebook.com/pawan.saket"
            )}
            {returnMedia(
              "linkedin.svg",
              "https://www.linkedin.com/in/pawan-saket-7978b975/"
            )}
            {returnMedia("github.svg", "https://github.com/pawan9124")}
          </ul>
        </div>
        <div className="copy-right">
          {" "}
          &copy; Made with {"</>"} by Pawan Saket 2019.{" "}
        </div>
      </section>
    );
  }
}

export default Contact;
