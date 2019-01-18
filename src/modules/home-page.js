import React, {Component} from 'react';
import Footer from './footer';
export default class Home extends Component{

  render(){
    return(
      <div id="HomePage">
        <div className="first-section">
          <div className="section-content">
            <h1 className="text-white">Heading Title</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consect tur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="second-section bg-low-blue">
          <div className="section-content">
            <h2 className="text-charcoal text-center">Heading Title</h2>
            <span className="space-32"></span>
            <p className="text-charcoal text-center text-bold">
              Lorem ipsum dolor sit amet, consect tur adipiscing elit.
            </p>
            <span className="space-32"></span>
            <div className="btn orange">Click to learn more</div>
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
