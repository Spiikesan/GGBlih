import React, { Component } from 'react'
// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// Images
import logo from './logo.svg'
// Components
import MainTitle from './MainTitle'
import LangSelect from './LangSelect'
import NavBox from './NavBox'
import Repositories from './Repositories'

class App extends Component {
  render() {
    return (
      <div id="app" className="App container">
        <div className="App-header row">
          <NavBox login="login_x"/>
          <div className="col col-md-1">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <MainTitle title="Gestion Graphique de BLIH" />
          <LangSelect className="lang-select" />
        </div>
        <div className="row">
          <Repositories />
        </div>
      </div>
    );
  }
}

export default App;
