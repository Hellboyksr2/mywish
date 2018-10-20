import React, { Component } from 'react';

import Background from './Background/Background';
import Text from './Text/Text';

import './App.css';

class App extends Component {

  render() {
    return (
        <Background> 
          <Text> 
            May millions of lamp illuminate your life with endless joy,
            Prosperty, Health and Wealth forever. Wishinging you and your 
            family members advance Happy Diwali!!!
          </Text>
        </Background>
    );
  }
}

export default App;
