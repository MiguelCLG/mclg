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
        $(".sideNav").css("overflow-x", "visible");
        if(!$(".sideNav a").hasClass("active-link")){
          $(".sideNav a").css("margin", "10px -10px 10px 10px");
        }
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

    }
  }

  changeActive(x){
    $(".sideNav a.active-link").removeClass("active-link");
    $(".sideNav a").eq(x).addClass("active-link");
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
              <a className="nav-link active-link" href="/#" onClick={(e)=>this.changeActive(0)}>Home </a>
              <a className="nav-link" href="/#about-section" onClick={(e)=>this.changeActive(1)}>About</a>
              <a className="nav-link" href="/#development-section" onClick={(e)=>this.changeActive(2)}>Web Dev</a>
              <a className="nav-link" href="/#development-section" onClick={(e)=>this.changeActive(3)}>Game Dev</a>
              <a className="nav-link" href="/#footer" onClick={(e)=>this.changeActive(4)}>Contact</a>
            </div>
          </div>
          <div className="nav-bg-border bg-black clip-left-to-right">
            <div className="nav-bg bg-orange clip-left-to-right">
              <div className="nav-contact-info">
                <p className="info-text bg-red">Email</p><a href="mailto:miguelclg@hotmail.com">MiguelCLG@hotmail.com</a>
                <p className="info-text bg-red">Mobile</p><a href="tel:07341323979">07341323979</a>

              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
