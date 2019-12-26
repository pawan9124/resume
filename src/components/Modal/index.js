import React from "react";
import "./style.scss";

let isZoomed = false;
class Modal extends React.Component {
  componentDidMount() {
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];
    const modal = document.getElementById("imageModal");
    span.onclick = function() {
      modal.style.display = "none";
    };
  }
  setZoom() {
    console.log(
      "iszeoom",
      isZoomed,
      document.getElementById("imgModal").classList
    );
    if (!isZoomed) {
      document.getElementById("imgModal").classList.remove("zoomOut");
      document.getElementById("imgModal").classList.add("zoomIn");
      isZoomed = true;
    } else {
      document.getElementById("imgModal").classList.add("zoomOut");
      document.getElementById("imgModal").classList.remove("zoomIn");
      isZoomed = false;
    }
  }
  render() {
    return (
      <div id="imageModal" className="modal">
        <span className="close">&times;</span>
        <h2 className="doc-title"></h2>
        <div className="details">
          <div className="detail-section">
            <h3>Details</h3>
            <div id="detail-list-id" className="detail-list"></div>
            <a
              id="button"
              target="_blank"
              href="##"
              className="btn btn-primary btn-project"
            >
              Visit Project
            </a>
          </div>
          <img
            className="modal-content"
            id="imgModal"
            onClick={this.setZoom.bind(this)}
          />
        </div>

        <div id="caption"></div>
      </div>
    );
  }
}
export default Modal;
