import React, {Component} from 'react';
import Footer from './footer';
export default class Home extends Component{

  render(){
    return(
      <div id="HomePage">
        <div className="first-section bg-orange">
          <div className="section-content">

          </div>
        </div>

        <div id="about-section" className="third-section bg-purple">
          <div className="section-content">
            <h2 className="text-white text-center">About</h2>
            <span className="space-32"></span>
            <p className="text-white text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id velit dictum, dictum leo eu, efficitur magna. Phasellus pharetra purus venenatis, consectetur ante ut, auctor orci.<br/><br/>
            Phasellus augue tellus, tincidunt nec fringilla et, sagittis sit amet urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<br/><br/>
            Ut pellentesque massa ac hendrerit blandit. Aenean quis sapien sit amet tellus elementum tincidunt.
            </p>
          </div>
        </div>
        <div id="development-section" className="fourth-section">
          <div className="group">
            <div className="col span_1_of_2 bg-webdev"><a href="/#">Web Development</a></div>
            <div className="col span_1_of_2 bg-gamedev"><a href="/#">Game Development</a></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
