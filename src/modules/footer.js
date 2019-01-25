import React, { Component } from 'react';

export default class Footer extends Component{

  render(){
    return(
      <footer id="footer">
        <div className="footer">
          <div className="page-wrapper">
            <div className="page-inner-wrapper">
              <div className="section group">
                <div className="col-footer span_1_of_3">
                    <h3 className="text-orange ">About</h3>
                    <div className="underline-after bg-orange"></div>
                    <p className="space-after-12 text-white text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id velit dictum, dictum leo eu, efficitur magna. Phasellus pharetra purus venenatis, consectetur ante ut, auctor orci.</p>
                    <p className="space-after-12 text-white text-light">Miguel Gonçalves</p>
                    <p className="space-after-12 text-white text-light">Telephone: <a href="tel:+447341323979">07341 323979</a></p>
                    <p className="space-after-24 text-white text-light">Email: <a href="mailto:miguelclg@hotmail.com">miguelclg@hotmail.com</a></p>
                </div>
                <div className="col-footer span_1_of_3">
                  <h3 className="text-orange">Site map</h3>
                  <div className="underline-after bg-orange"></div>
                  <div className="site-map" onClick={(e)=>this.props.changeActive(0)}><p className="text-light">Home</p></div>
                  <div className="site-map" onClick={(e)=>this.props.changeActive(1)}><p className="text-light">About Us</p></div>
                  <div className="site-map" onClick={(e)=>this.props.changeActive(2)}><p className="text-light">Web Development</p></div>
                  <div className="site-map" onClick={(e)=>this.props.changeActive(3)}><p className="text-light">Game Development</p></div>
                  <div className="site-map" onClick={(e)=>this.props.changeActive(4)}><p className="text-light">Contact</p></div>
                </div>
                <div className="col-footer span_1_of_3">
                  <h3 className="text-orange">Get in touch</h3>
                  <div className="underline-after bg-orange"></div>
                  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                  <div className="form-inputs">
                    <input data-validation="fullname" type="text" name="fullname" maxLength="60" placeholder="Enter your name"/>
                  </div>
                  <div className="form-inputs">
                    <input data-validation="emailAddress" type="email" name="emailAddress" maxLength="60"  placeholder="email@domain.co.uk"/>
                  </div>
                  <div className="form-inputs">
                    <textarea data-validation="contactMessage"  type="text" name="contactMessage" maxLength="255" placeholder="Leave me a message"></textarea>
                  </div>
                  <div className="form-inputs">
                    <input className="btn orange round-corner-4" type="submit" name="cf-submit" value="Send Message"/>
                  </div>
                  </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </footer>
    );
  }
}
