import React, { Component } from 'react';
import $ from 'jquery';
export default class Footer extends Component{
constructor(props){
  super(props);
  this.state = {
    name: '',
    senderAddress: '',
    contactMessage: '',
    formEmailSent: false
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
  handleChange(event) {
    if(event.target.name === "fullname")
      {
        this.setState({
          name: event.target.value
        });
      }
      else if(event.target.name === "emailAddress")
      {
        this.setState({
          senderAddress: event.target.value
        });
      }
      else if (event.target.name === "contactMessage")
      {
        this.setState({
          contactMessage: event.target.value
        });
      }
}
  handleSubmit(event){
    event.preventDefault()

      const {
        REACT_APP_EMAILJS_RECEIVER: receiverEmail,
        REACT_APP_EMAILJS_TEMPLATEID: template
      } = this.props.env

      this.sendFeedback(
        template,
        this.state.name,
        this.state.senderAddress,
        receiverEmail,
        this.state.contactMessage
      );

      this.setState({
        formSubmitted: true
      });
    }

    sendFeedback (templateId, senderName,senderEmail, receiverEmail, feedback) {
      window.emailjs.send(
        'mailgun',
        templateId,
        {
          senderName,
          senderEmail,
          receiverEmail,
          feedback
        })
        .then(res => {
          this.setState({
            formEmailSent: true,
            name: '',
            senderAddress: '',
            contactMessage: ''
          })
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Failed to send feedback. Error: ', err))
        $(".verify-send").fadeIn(500, function(){$(this).fadeOut(500);});
  }
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
                    <p className="space-after-24 text-white text-light">Email: <a href="mailto:miguel@m-clg.com">miguel@m-clg.com</a></p>
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

                  <form className="contact-form" onSubmit={this.handleSubmit} >
                    <div className="form-inputs">
                      <input
                      data-validation="fullname"
                      type="text" name="fullname"
                      maxLength="60"
                      placeholder="Enter your name"
                      onChange={(e) => this.handleChange(e)}
                      required
                      value={this.state.name}/>
                    </div>
                    <div className="form-inputs">
                      <input
                        data-validation="emailAddress"
                        type="email" name="emailAddress"
                        maxLength="60"
                        placeholder="email@domain.co.uk"
                        onChange={(e) => this.handleChange(e)}
                        required
                        value={this.state.senderAddress}/>
                    </div>
                    <div className="form-inputs">
                      <textarea data-validation="contactMessage"  type="text" name="contactMessage" maxLength="255" placeholder="Leave me a message" onChange={(e) => this.handleChange(e)} value={this.state.contactMessage}></textarea>
                    </div>
                    <div className="form-inputs">
                      <input className="btn orange round-corner-4" type="submit" name="cf-submit" value="Send Message"/>
                    </div>
                  </form>
                  <div className="verify-send"> <p>Your message has been successfully sent.</p> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </footer>
    );
  }
}
