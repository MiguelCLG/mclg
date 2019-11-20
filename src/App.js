import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import './style-tablet.css';
import './style-mobile.css';

import Header from './modules/header';
import Home from './modules/home-page';
import Footer from './modules/footer';
import GameDev from './modules/gamedev-page';
import WebDev from './modules/webdev-page';
import PopUp from './modules/popup';
import KnightlyDuels from './modules/games/knightly-duels';
import SpaceInvaders from './modules/games/space-invaders';
const popupJson = require('./modules/popup-info.json');
var popup;

class App extends Component {
constructor(props)
{
  super(props);
  this.state = {
    page: 0,
    menu: false,
    popup:false,
    json: popupJson
  }
  this.toggleGame.bind(this);
  this.toggleMenu.bind(this);
  this.togglePopup.bind(this);

}
toggleMenu(x){
  let mainBodyElement = document.getElementsByClassName("main-body")[0];
  let sideNavElementLink = document.getElementsByClassName("nav-link");
  if(x.target.classList.contains("hamburguer"))
  {
      x.target.classList.toggle("change");
  }
  else if (x.target.parentElement.classList.contains ("hamburguer"))
  {
    x.target.parentElement.classList.toggle("change");
  }
  if(x.target.classList.contains("change") || x.target.parentElement.classList.contains("change")){
    if(window.innerWidth < 668){
      document.getElementById("nav").style.width = "100%";
      mainBodyElement.style.marginLeft = "0";
      for (var i=0; i < sideNavElementLink.length; i++){
        sideNavElementLink[i].style.margin = "40px auto";
        sideNavElementLink[i].style.width = "50%";

      }
      this.setState({menu: true});

    }
    else{
      document.getElementById("nav").style.width = "250px";
      mainBodyElement.style.marginLeft = "250px";
      document.getElementsByClassName("sideNav")[0].style.overflowX = "visible";
      //$(".sideNav").css("overflow-x", "visible");
      for (i=0; i < sideNavElementLink.length; i++){
        if(!sideNavElementLink[i].classList.contains("active")){
          sideNavElementLink[i].style.margin = "10px -10px 40px 10px";
          sideNavElementLink[i].style.width = "100%";

        }
      }
      this.setState({menu: true});
    }
    mainBodyElement.style.width = parseFloat(mainBodyElement.style.width) - 250 + "px";

  }
  else{
    document.getElementById("nav").style.width = "0";
    document.getElementsByClassName("main-body")[0].style.marginLeft = "0";
    mainBodyElement.style.width = "100%";
    document.getElementsByClassName("sideNav")[0].style.overflowX = "hidden";
    for (i=0; i < sideNavElementLink.length; i++){
      if(!sideNavElementLink[i].classList.contains("active")){
        sideNavElementLink[i].style.margin = "0";
      }
      sideNavElementLink[i].style.width = "100%";
    }
    this.setState({menu: false});


  }
}


toggleGame(index)
{
  this.setState({page:index});
}

togglePopup(x){
  if(this.state.popup)
  {
    this.setState({popup:false});
  }
  else
  {
    popup = <PopUp image={popupJson[x]["image"]} altimage={popupJson[x]["heading"]} headingtext={popupJson[x]["heading"]} description={popupJson[x]["description"]} togglePopup={(e) => this.togglePopup(e)}/>;
    this.setState({popup:true});
    if(this.state.menu)
    document.getElementsByClassName("hamburguer")[0].click();
  }

}
  render() {

    return (
      <div id="App" className="App bg-orange">
        <div className="main-body">
          <Header toggleMenu={this.toggleMenu.bind(this)}/>
          <Switch>
            <Route exact path="/" component={(props)=> {return <Home />}} />
            <Route exact path="/webdev" component={(props)=> {return <WebDev popupState={this.state.popup} popup={popup} togglePopup={(e) => this.togglePopup(e)}/>}} />
            <Route exact path="/gamedev" component={(props)=> {return <GameDev />}} />
            <Route exact path="/knight" component={(props)=> {return <KnightlyDuels />}} />
            <Route exact path="/space-invaders" component={(props)=> {return <SpaceInvaders />}} />

          </Switch>
          <Footer env={this.props.env}/>
        </div>
      </div>
    );
  }
}

export default App;
