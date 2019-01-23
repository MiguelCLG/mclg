import React, {Component} from "react";
import Footer from './footer';
export default class GameDev extends Component {


  render() {
    return (
      <div id="development-page">
        <div className="game-section bg-orange">
        <div className="heading">
          <h1 className="text-white">Game Development</h1>
        </div>
          <div className="page-wrapper">
            <div className="page-inner-wrapper">
              <div className="group">
                <div className="game-cols span_1_of_3"><a className="font-persona text-light text-white" href="/#" target="_blank" onClick={(e) => this.props.navigation(5)}><img src={require("../images/knightlyduel.jpg")} alt="Knightly Duel" className="game-thumbnails"/> Knightly Duel</a></div>
                <div className="game-cols span_1_of_3"><a className="font-persona text-light text-white" href="/#" onClick={(e) => this.props.navigation(6)}><img src={require("../images/spaceinvaders.jpg")} alt="Knightly Duel" className="game-thumbnails"/>Space Invaders</a></div>
                <div className="game-cols span_1_of_3"><a className="font-persona text-light text-white" href="/#">Game Development</a></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
