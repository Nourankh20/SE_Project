import {Container , AppBar , Typography , Grow , Grid} from '@material-ui/core';
//import ShowSession from '../showSession/showSession.js';
//import CreateSchedule from '../createSchedule/createSchedule.js';
import ShowTutorials from '../showTutorials/showTutorials.js'
//import StudentSchedule from './studentSchedule';
import ShowStudentTut from '../showTutorials/showStudentTut.js'

import '../../App.css';
import useStyles from '../../styles';
function TA() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth = "lg">
        <AppBar className = {classes.appBar} position="static" color="inherit" >
          <Typography className={classes.heading} variant="h2" align="center">TA Dashboard</Typography>         
        </AppBar>
        
        <Grow in>
          <Container >
            <Grid container justify="space-between" alignItems="strect" >
              <Grid item xs={13} sm={15}>
                <AppBar className={classes.appBar} position="static" color="inherit" >
                  <ShowTutorials />
                  </AppBar>
                  
                
            </Grid>
            

            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default TA;
