import React from 'react';
import plane from './plane.png';

const Navigation =({onRouteChange})=>{
  return(
    <header className="bg-white black-80 tc pv4 avenir">
    <p className='dib animated zoomOutUp infinite'  style={{height:60, width:60}}>
    <img alt='plane' src={plane} />
  </p>
  <h1 className="mt2 mb0 baskerville i fw1 f1 animated fadeInLeft">YIFANG LO</h1>
  <h2 className="mt2 mb0 f6 fw4 ttu tracked animated fadeInRight">WEB DEVELOPER</h2>
  <nav className="bt bb tc mw7 center mt4">
    <p onClick={()=>onRouteChange('home')} className="f6 f5-l link bg-animate black-80 hover-bg-light-red dib pa3 ph4-l pointer">About</p>
    <p onClick={()=>onRouteChange('portfolio')} className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l pointer">Portfolio</p>
    <p onClick={()=>onRouteChange('contact')}className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l pointer">Contact</p>
  </nav>
</header>

  );
}




export default Navigation;
