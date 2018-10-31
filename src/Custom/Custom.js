import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles =  theme  => ({
  root : {
    padding: '30px 20px',
    position: 'absolute',
    top: '0px',
    bottom: '0px',
    backgroundColor: '#FAFAFA'
  },
  paper : {
    padding: '30px 20px'
  },
  button: {
    margin: theme.spacing.unit,
    position: 'absolute',
    bottom: '20px',
    right: '20px'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  checkBox: {
    width: '100%',
    justifyContent: 'center'
  }
})

class Custom extends Component {

  constructor(props) {
    super(props);

    this.state = {
      from : '',
      showHearts : false
    }
  }

  fromChangeHandler = (event) => {
    this.setState( { from : event.target.value } )
  }

  showHeartsHandler = (event) => {
    this.setState( { showHearts : event.target.checked })
  } 

  render() {

    const { classes } = this.props;

    const webURL = 
     `https://awesome-mayer-1ac5ec.netlify.com/%23/?fromp=${
       this.state.from.replace( / /g , '%20')}%26showHearts=${this.state.showHearts}`;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={1}>
            <TextField required fullWidth
              name="from"
              value={ this.state.from}
              onChange= { this.fromChangeHandler }
              label="Your Name"
              margin="normal"
            />
            <Divider light />
            {/* <TextField fullWidth
              name = "to"
              label="To"
              helperText="Optional"
              margin="normal"
            />
            <Divider light /> */}
            <FormControlLabel
              className = { classes.checkBox }
              control={
                <Checkbox
                  checked={this.state.showHearts}
                  onChange={this.showHeartsHandler}
                  value="checkedA"
                />
              }
              label="For Special One"
            />
          </Paper>
          {/* // https://wa.me/?text=urlencodedtex */}
          <Button 
            disabled = { this.state.from.length < 3 }
            component={"a"} href={ `https://wa.me/?text=${webURL}` } target="_blank"
            variant="contained" color="primary" className={classes.button}>
            Send
            <Icon className={classes.rightIcon}>send</Icon>
          </Button>
        </Grid>
      </Grid>
    )
  }

}

export default withStyles(styles)(Custom);