import React, {Component} from 'react';

export default class PopUp extends Component{
  render(){
    var img = this.props.image;

    return(
    <div className="popup-panel" onClick={(e) => this.props.togglePopup(0)}>
    <div className="popup-close"><div className="bar1"></div><div className="bar2"></div></div>
      <div className="wrapper">
        <div className="popup-image">
          <img src={require("../images/web-tiles/" + img)} alt={this.props.altimage}/>
        </div>
        <div className="popup-heading">
          <h2 className="popup-heading-text">{this.props.headingtext}</h2>
        </div>
        <p className="popup-description">{this.props.description}</p>
      </div>
    </div>
  );
  }
}
