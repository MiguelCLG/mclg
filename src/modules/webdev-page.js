import React, {Component} from "react";

export default class WebDev extends Component {

  render() {
    return (
      <div id="web-development-page">
        <div className="first-section bg-purple"></div>
        <div className="game-section bg-red">
          <div className="heading padding-top-64">
            <h1 className="text-white">Web Development</h1>
          </div>
          <div className="page-wrapper">
            <div className="page-inner-wrapper">
              <div className="group">
                <div className="game-cols span_1_of_3"><div className="pop-up font-persona text-light text-white" onClick={(e) => this.props.togglePopup(0)}><img src={require("../images/web-tiles/topic-heroes.jpg")} alt="Topic Heroes" className="game-thumbnails"/><h5>Topic Heroes</h5></div></div>
                <div className="game-cols span_1_of_3"><div className="pop-up font-persona text-light text-white" onClick={(e) => this.props.togglePopup(1)}><img src={require("../images/web-tiles/nutshell.jpg")} alt="Nutshell" className="game-thumbnails"/><h5>Nutshell</h5></div></div>
                <div className="game-cols span_1_of_3"><div className="pop-up font-persona text-light text-white" onClick={(e) => this.props.togglePopup(2)}><img src={require("../images/web-tiles/amita.jpg")} alt="Amita Patel" className="game-thumbnails"/><h5>Amita Patel</h5></div></div>
              </div>
              <div className="group">
                <div className="game-cols span_1_of_3"><div className="pop-up font-persona text-light text-white" onClick={(e) => this.props.togglePopup(3)}><img src={require("../images/web-tiles/digital-origin.jpg")} alt="Digital Origin" className="game-thumbnails"/><h5>Digital Origin</h5></div></div>
                <div className="game-cols span_1_of_3"><div className="pop-up font-persona text-light text-white" onClick={(e) => this.props.togglePopup(4)}><img src={require("../images/web-tiles/cawleys.jpg")} alt="Cawleys" className="game-thumbnails"/><h5>Cawleys</h5></div></div>
                <div className="game-cols span_1_of_3"><div className="pop-up font-persona text-light text-white" onClick={(e) => this.props.togglePopup(5)}><img src={require("../images/web-tiles/vpress.jpg")} alt="Vpress" className="game-thumbnails"/><h5>Vpress</h5></div></div>
              </div>
            </div>
          </div>
        </div>
        {this.props.popupState && this.props.popup}
      </div>
    )
  }
}
