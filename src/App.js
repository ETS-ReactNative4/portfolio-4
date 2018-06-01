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
        <footer class="pv4 ph3 ph5-m ph6-l mid-gray">
         <small class="f6 db tc">© 2018<b class="ttu"> YIFANG LO</b> All Rights Reserved</small>
        </footer>

      </div>
    );
  }
}

export default App;
