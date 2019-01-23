import React, { Component } from 'react';
import './App.css';
import './style-tablet.css';
import './style-mobile.css';

import Header from './modules/header';
import Home from './modules/home-page';
import GameDev from './modules/gamedev-page';
import KnightlyDuels from './modules/games/knightly-duels';
import SpaceInvaders from './modules/games/space-invaders';


class App extends Component {
constructor(props)
{
  super(props);
  this.state = {
    page: 0
  }
  this.togglePage.bind(this);
  this.toggleGame.bind(this);
}
togglePage(index)
{
  this.setState({page: index});
}
toggleGame(index)
{
  this.setState({page:index});
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
    if (this.state.page === 3)
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
      page = <Home />;
    }
    return (
      <div id="App" className="App bg-orange">
        <div className="main-body">
          <Header navigation={this.togglePage.bind(this)}/>
          {page}
        </div>
      </div>
    );
  }
}

export default App;
