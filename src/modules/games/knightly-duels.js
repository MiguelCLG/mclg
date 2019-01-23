import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";


export default class KnightlyDuels extends React.Component {
  constructor(props) {
    super(props);

    this.unityContent = new UnityContent(
      "./KnightlyDuels/Build/Knightly Duels.json",
      "./KnightlyDuels/Build/UnityLoader.js"
    );
  }

  render() {
    return (
    <div id="game-container">
    <div class="heading">
      <h1 class="text-center text-white">Knightly Duel</h1>
    </div>
        <Unity unityContent={this.unityContent} />
    </div>);
  }
}
