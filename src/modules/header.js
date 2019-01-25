import React, {Component} from 'react';

export default class Header extends Component{

  render(){
    return(
      <header className="App-header">
        <div className="hamburguer" onClick={(e)=>this.props.toggleMenu(e)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div id="nav" className="sideNav bg-purple">
          <div className="sideNavBg bg-purple">
            <div className="sideNavLinks">
              <div className="nav-link active-link" onClick={(e)=>this.props.changeActive(0)}>Home </div>
              <div className="nav-link" onClick={(e)=>this.props.changeActive(1)}>About</div>
              <div className="nav-link" onClick={(e)=>this.props.changeActive(2)}>Web Dev</div>
              <div className="nav-link" onClick={(e)=>this.props.changeActive(3)}>Game Dev</div>
              <div className="nav-link" onClick={(e)=>this.props.changeActive(4)}>Contact</div>
            </div>
          </div>
          <div className="nav-bg-border bg-black clip-left-to-right">
            <div className="nav-bg bg-orange clip-left-to-right">
              <div className="nav-contact-info">
                <p className="info-text bg-red">Email</p><a href="mailto:miguel@m-clg.com">miguel@m-clg.com</a>
                <p className="info-text bg-red">Mobile</p><a href="tel:07341323979">07341323979</a>

              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
