import React, { Component } from 'react';
import $ from 'jquery';
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
  this.togglePage.bind(this);
  this.toggleGame.bind(this);
  this.toggleMenu.bind(this);
  this.changeActive.bind(this);
  this.togglePopup.bind(this);

}
toggleMenu(x){
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
      document.getElementsByClassName("main-body")[0].style.marginLeft = "0";
      this.setState({menu: true});

    }
    else{
      document.getElementById("nav").style.width = "250px";
      document.getElementsByClassName("main-body")[0].style.marginLeft = "250px";
      $(".sideNav").css("overflow-x", "visible");
      if(!$(".sideNav a").hasClass("active-link")){
        $(".sideNav a").css("margin", "10px -10px 10px 10px");
      }
      this.setState({menu: true});
    }
    $(".main-body").eq(0).css("width", parseFloat($(".main-body").eq(0).css("width")) - 250 + "px");

  }
  else{
    document.getElementById("nav").style.width = "0";
    document.getElementsByClassName("main-body")[0].style.marginLeft = "0";
    $(".main-body").eq(0).css("width", "100%");
    $(".sideNav").css("overflow-x", "hidden");
    if(!$(".sideNav a").hasClass("active-link")){
      $(".sideNav a").css("margin", "0");
    }
    this.setState({menu: false});


  }
}

changeActive(x){
  $(".sideNav div.active-link").removeClass("active-link");
  $(".sideNav div.nav-link").eq(x).addClass("active-link");
  this.togglePage(x);
  if(this.state.menu && window.innerWidth <= 668)
    {
      $(".hamburguer").click();
    }
}
togglePage(index)
{
  this.setState({page: index});
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
      $(".hamburguer").click();
  }

}
  render() {
    /*
  --------Pages--------
    0 - HomePage
    1 - AboutPage
    2 - WebDevPage
    3 - GameDevPage
    4 - ContactPage
  --------Games--------
    5 - Knightly Duels
    6 - Space Invaders
     */
    let page;
    if (this.state.page === 2)
    {
      page = <WebDev popupState={this.state.popup} popup={popup} togglePopup={(e) => this.togglePopup(e)}/>
    }
    else if (this.state.page === 3)
    {
      page = <GameDev navigation={this.toggleGame.bind(this)} />
    }
    else if(this.state.page === 5)
    {
      page = <KnightlyDuels />;
    }
    else if(this.state.page === 6)
    {
      page = <SpaceInvaders />;
    }
    else{
      page = <Home navigation={this.togglePage.bind(this)} changeActive={this.changeActive.bind(this)}/>;
    }
    return (
      <div id="App" className="App bg-orange">
        <div className="main-body">
          <Header navigation={this.togglePage.bind(this)} changeActive={this.changeActive.bind(this)} toggleMenu={this.toggleMenu.bind(this)}/>
          {page}
          <Footer env={this.props.env} changeActive={this.changeActive.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
