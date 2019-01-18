import React, {Component} from 'react';
import $ from 'jquery';

export default class Header extends Component{
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
      if(parseFloat($(".main-body").css("width")) < 668){
        document.getElementById("nav").style.width = "100%";
        document.getElementsByClassName("main-body")[0].style.marginLeft = "0";
      }
      else{
        document.getElementById("nav").style.width = "250px";
        document.getElementsByClassName("main-body")[0].style.marginLeft = "250px";
      }
      $(".main-body").eq(0).css("width", parseFloat($(".main-body").eq(0).css("width")) - 250 + "px");

    }
    else{
      document.getElementById("nav").style.width = "0";
      document.getElementsByClassName("main-body")[0].style.marginLeft = "0";
      $(".main-body").eq(0).css("width", "100%");
    }
  }
  render(){
    return(
      <header className="App-header">
        <div className="hamburguer" onClick={(e)=>this.toggleMenu(e)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div id="nav" className="sideNav bg-purple">
          <div className="sideNavBg bg-purple">
            <div className="sideNavLinks">
              <a href="/#">About</a>
              <a href="/#">Web Development</a>
              <a href="/#">Game Development</a>
              <a href="/#">Contact</a>
            </div>
          </div>
          <div className="nav-bg bg-orange clip-left-to-right"></div>
        </div>
      </header>
    );
  }
}
