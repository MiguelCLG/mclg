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
                    <h3 className="text-white ">About</h3>
                    <div className="underline-after bg-orange"></div>
                    <p className="space-after-12 text-white text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id velit dictum, dictum leo eu, efficitur magna. Phasellus pharetra purus venenatis, consectetur ante ut, auctor orci.</p>
                    <p className="space-after-12 text-white text-light">Miguel Carlos Lucas Gonçalves <br/> 460, Hitchin Road <br/> Luton, LU2 7ST <br/>Bedfordshire </p>
                    <p className="space-after-12 text-white text-light">Telephone: <a href="tel:+447341323979">07341 323979</a></p>
                    <p className="space-after-24 text-white text-light">Email: <a href="mailto:miguelclg@hotmail.com">miguelclg@hotmail.com</a></p>
                </div>
                <div className="col-footer span_1_of_3">
                  <h3 className="text-white">Site map</h3>
                  <div className="underline-after bg-orange"></div>
                  <p className="text-light"><a className="scroll" href="/#">Home</a></p>
                  <p className="text-light"><a className="scroll" href="/#">About Us</a></p>
                  <p className="text-light"><a className="scroll" href="/#">Web Development</a></p>
                  <p className="text-light"><a className="scroll" href="/#">Game Development</a></p>
                  <p className="text-light"><a className="scroll" href="/#">Contact</a></p>
                </div>
                <div className="col-footer span_1_of_3">
                  <h3 className="text-white">Get in touch</h3>
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
