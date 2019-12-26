import React from "react";
import "./style.scss";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.showPopup = this.showPopup.bind(this);
  }

  //to pop up the modal
  showPopup(e) {
    //removing the child node
    document.getElementById("detail-list-id").innerHTML = "";
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgModal");
    const captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = require(`../../docs/images/${e.target.alt}`);
    captionText.innerHTML = e.target.alt;
    document.getElementById("imgModal").classList.remove("zoomOut");
    document.getElementById("imgModal").classList.remove("zoomIn");
    document.getElementsByClassName(
      "doc-title"
    )[0].innerText = this.props.doc_title;

    //creating the button link
    document.getElementsByClassName("btn-project")[0].href = this.props.link;

    if (this.props.link !== undefined) {
      document.getElementsByClassName("btn-project")[0].style.display = "block";
    } else {
      document.getElementsByClassName("btn-project")[0].style.display = "none";
    }
    //creating the details
    let sendDetails;
    if (this.props.details !== undefined) {
      if (
        typeof this.props.details !== "string" &&
        this.props.details.length > 0
      ) {
        sendDetails = document.createElement("ul");
        this.props.details.map((data, index) => {
          let createLi = document.createElement("li");
          let createNode = document.createTextNode(data);
          createLi.appendChild(createNode);
          // Create a <li> node
          sendDetails.appendChild(createLi);
        });
      } else {
        sendDetails = document.createElement("p"); // Create a <li> node
        let textnode = document.createTextNode(this.props.details); // Create a text node
        sendDetails.appendChild(textnode);
      }
      document.getElementById("detail-list-id").appendChild(sendDetails);
    }
  }

  render() {
    return (
      <div className="card-container" style={this.props.style}>
        <div
          className="card-child"
          data-sal="slide-up"
          style={{ "--sal-duration": "0.5s", "--sal-delay": "0.5s" }}
        >
          <div className="image-cover"></div>
          <img
            className="card-image"
            src={require(`../../docs/images/${this.props.image}`)}
            alt={this.props.image}
            onClick={this.showPopup}
          />

          <div className="card-heading">
            <h3>{this.props.heading}</h3>
            <span className="card-text"></span>
            <div className="card-count">{this.props.cardIndex}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
