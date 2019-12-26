import React from "react";
import Cards from "../Cards";
import lineDataArray from "./lineData.json";
import "./style.scss";

class Professional extends React.Component {
  createLine(lineNumber, lineData) {
    let line = document.createElement("div");
    line.setAttribute("data-line-nr", lineNumber);
    line.className = "code-l";

    lineData.map((data, index) => {
      let childData = document.createElement("span");
      childData.className = data.class;
      let textnode = document.createTextNode(data.text);
      childData.appendChild(textnode);
      line.appendChild(childData);
    });
    return line.outerHTML;
  }
  render() {
    const createLineNodes = lineDataArray.data.map((data, index) => {
      return (
        <div
          className="line"
          key={data.line + index + "data-list"}
          dangerouslySetInnerHTML={{
            __html: this.createLine(data.line, data.value)
          }}
        ></div>
      );
    });
    return (
      <section className="fifth_section" id="tech">
        <h1>About/></h1>
        <div className="about_container">{createLineNodes}</div>
      </section>
    );
  }
}

export default Professional;
