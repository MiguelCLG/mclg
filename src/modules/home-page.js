import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component{

  render(){
    /*
    <p className="text-white text-center">
      I can give insight and aid in the planning of a website and make sure it fits my client's business.
    </p>
     */
    return(
      <div id="HomePage">
        <div className="first-section bg-orange">
          <div className="section-content">
          </div>
        </div>

        <div id="about-section" className="third-section bg-purple">
          <div className="section-content">
            <h2 className="text-white text-center">Hello</h2>
            <span className="space-32"></span>
            <p className="text-white text-center">
              My name is Miguel Gonçalves, I am a Portuguese developer with a passion to make things "tick".<br/>
              Computer programming has always been my calling and I've been working towards becoming the best I can be.<br/>
              I can do two types of development, Web and Game. <br/>
              Professionally I'm a Front End Web Developer and I can build pixel perfect websites from a design document. <br/>
              As a hobby, you can find me coding some games in Unity3D, I usually make those old retro 2D Games since these were a big part of my childhood.<br/>
              Feel free to have a look at some of my work, and play some games!
        
            </p>
          </div>
        </div>
        <div id="development-section" className="fourth-section">
          <div className="group">
            <div className="col span_1_of_2 bg-webdev bg-red">
              <Link className="font-persona" exact to="/webdev">Web Development</Link>

            </div>
            <div className="col span_1_of_2 bg-gamedev bg-orange"><Link className="font-persona" exact to="/gamedev">Game Development</Link></div>
          </div>
        </div>
      </div>
    );
  }
}
