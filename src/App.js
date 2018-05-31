import React, { Component } from 'react';
import 'tachyons';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      route: 'home'
    }
  }

  onRouteChange = (route)=>{
    this.setState({route: route});
  }
  render() {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange}/>
        {this.state.route === 'home'
        ?<About />
        :(
          this.state.route === 'portfolio'
        ? <Portfolio onRouteChange={this.onRouteChange}/>
        : <Contact/>
         )
        }
      </div>
    );
  }
}

export default App;
