import React, { Component } from 'react';

import Background from '../Background/Background';
import Text from '../Text/Text';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const styles = {
  button : {
    position: 'absolute',
    bottom: '30px',
    width: '100%',
    left: 0,
    fontWeight: 600
  }
}

class Home extends Component {

  render() {
    
    const { location } = this.props;
    let params = new URLSearchParams(location.search);

    return (
        <Background showHearts={ params.get("showHearts")}> 
          <Text name={params.get("name")}> 
            May millions of lamp illuminate your life with endless joy,
            Prosperty, Health and Wealth forever. Wishinging you and your 
            family members advance Happy Diwali!!!
          </Text>
          <Button component={Link} to="/custom"
            variant="outlined" color="secondary" style= { styles.button }>
            Create your Own
          </Button>
        </Background>
    );
  }
}

export default Home;
