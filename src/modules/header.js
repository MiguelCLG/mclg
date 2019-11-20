import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom'
class Header extends Component{

  render(){
    return(
      <header className="App-header">
        <div className="hamburguer" onClick={(e)=>this.props.toggleMenu(e)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div id="nav" className="sideNav bg-purple">
          <div className="sideNavContainer">
          <div className="sideNavBg bg-purple">
            <div className="sideNavLinks">
              <NavLink className="nav-link" exact to="/">Home </NavLink>
              <NavLink className="nav-link" exact to="/webdev">Web Dev</NavLink>
              <NavLink className="nav-link" exact to="/gamedev">Game Dev</NavLink>
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
        </div>
      </header>
    );
  }
}
export default withRouter(Header);
