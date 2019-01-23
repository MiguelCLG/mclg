import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";


export default class SpaceInvaders extends React.Component {
  constructor(props) {
    super(props);

    this.unityContent = new UnityContent(
      "./SpaceInvaders/Build/WebBuild.json",
      "./SpaceInvaders/Build/UnityLoader.js"
    );
  }

  render() {
    return (
    <div id="game-container">
    <div className="heading">
      <h1 className="text-center text-white">Space Invaders</h1>
    </div>
        <Unity width="600px" height="800px" unityContent={this.unityContent} />
    </div>);
  }
}
