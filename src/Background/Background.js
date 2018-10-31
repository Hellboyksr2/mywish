/* global createFirework */
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particalsConfig from './particalsConfig';

import TopLeft from '../Assets/Images/top-left.png';
import TopRight from '../Assets/Images/top-right.png';
import BottomLeft from '../Assets/Images/bottom-left.png'
import BottomRight from '../Assets/Images/bottom-right.png'


const styles = {
  background : {
    backgroundColor : "#222222",
    position : 'absolute',
    top : '0px',
    bottom : '0px',
    left : '0px',
    right : '0px',
    color : '#FFFFFF'
  },
  fullHeight : {
    position : 'absolute',
    top : '0px',
    bottom : '0px',
    right: '0',
    left: '0',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: `url(${TopLeft}) , url(${TopRight}) , url(${BottomLeft}), url(${BottomRight})`,
    backgroundSize: '120px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0px 0px, 100% 0px, 0px 100%, 100% 100%',
    padding: '15px 30px',
    lineHeight: '1.5',
    border: '8px double #997A4F',
    margin: '10px',
    borderRadius: '40px'
  }
}

class Background extends Component {

  componentDidMount() {

    this.firstFirework = setInterval( () => {
      createFirework(23,200,6,3,null,null,null,null,false,true);
    } , 3000);
    

    this.secondFirework = setInterval( () => {
      createFirework(39,78,5,4,null,null,null,null,false,true);
    } , 2000);

  }

  componentWillUnmount() {
    clearInterval(this.firstFirework);
    clearInterval(this.secondFirework);
  }

  render() {

    const modifiedConfig = { ...particalsConfig };

    if( this.props.showHearts === "true") {
      modifiedConfig.particles.shape.type = "image";
      modifiedConfig.particles.size.value  = 30;
      modifiedConfig.particles.number.value  = 10;
    }

    return (
      <div>
        <Particles params={ modifiedConfig } style={styles.background } />

        <div style ={ { position : 'relative' , color : '#FFFFFF'}}>
          <div id="fireworks-template">
            <div id="fw" className="firework"></div>
            <div id="fp" className="fireworkParticle"><img src="./images/particles.gif" alt="" /></div>
          </div>
          <div id="fireContainer"></div>
        </div>
        <div style ={ styles.fullHeight }>
          { this.props.children }
        </div>
      </div>
    )
  }

}

export default Background;