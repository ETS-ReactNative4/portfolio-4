import React, { Component } from 'react';
import 'tachyons';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import './App.css';

const particleOptions={
  particles: {
    number: {
      value: 30,
      density:{
        enable: true,
        value_area: 400
      }
    },
    color: {
     value: '#1e4f59'
   },
   line_linked:{
     enable_auto: true,
     color: '#2f0d0d'
   }
 }
}

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
      <Particles className='particles'
      params={particleOptions}/>
        <Navigation onRouteChange={this.onRouteChange}/>
        {this.state.route === 'home'
        ?<About />
        :(
          this.state.route === 'portfolio'
        ? <Portfolio onRouteChange={this.onRouteChange}/>
        : <Contact/>
         )
        }
        <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
         <small className="f6 db tc">© 2019<b className="ttu"> YIFANG LO</b> All Rights Reserved</small>
        </footer>

      </div>
    );
  }
}

export default App;
