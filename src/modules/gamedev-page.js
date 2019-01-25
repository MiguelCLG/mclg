import React, {Component} from "react";
export default class GameDev extends Component {


  render() {
    return (
      <div id="development-page">
        <div className="first-section bg-red"></div>
        <div className="game-section bg-orange">
          <div className="heading padding-32">
            <h1 className="text-white">Game Development</h1>
          </div>
          <div className="page-wrapper">
            <div className="page-inner-wrapper">
              <div className="group">
                <div className="game-cols span_1_of_3"><a className="font-persona text-light text-white" href={"KnightlyDuels/index.html"} target="_blank" rel="noopener noreferrer"><img src={require("../images/knightlyduel.jpg")} alt="Knightly Duel" className="game-thumbnails"/> Knightly Duel</a></div>
                <div className="game-cols span_1_of_3"><a className="font-persona text-light text-white" href={"SpaceInvaders/index.html"} target="_blank" rel="noopener noreferrer"><img src={require("../images/spaceinvaders.jpg")} alt="Space Invaders" className="game-thumbnails"/>Space Invaders</a></div>
                <div className="game-cols span_1_of_3"><a className="font-persona text-light text-white" href="/#">Game Development</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
