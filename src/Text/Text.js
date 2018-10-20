import React, { Component } from 'react';

const styles = {
  text : {
    fontSize : '28px',
    textAlign : 'center',
    fontFamily: "textStyle"
  },
  from : {
    textAlign: 'right',
    color: '#abf5ff',
    paddingTop: '30px',
    paddingRight: '5px',
    fontSize: '20px',
    fontFamily: 'textStyle',
    fontWeight: 'bold',
    opacity : 0
  }
}

class Text extends Component {

  state = {
    text : "",
    textClassName : ''
  }


  componentDidMount() {
    let index = 1;
    const actualText = this.props.children;

    const interval = setInterval( () => {
      if( index <= actualText.length ) {
        this.setState( { text : actualText.substring(0, index++) });
      }
      else {
        this.closeInterval(interval);
      }
    } , 30);
  }

  closeInterval(interval) {
    this.setState( { textClassName : 'fadeIn'})
    clearInterval(interval);
  }

  render() {

    return (
      <section>
        <div style = { styles.text } className={'glow'} > 
          { this.state.text }
        </div>
        <div style={ styles.from } className={ this.state.textClassName }>
          <div>Best Regards,</div>
          <div>Test UserName.</div>
        </div>
      </section>
    )
  }
}

export default Text;