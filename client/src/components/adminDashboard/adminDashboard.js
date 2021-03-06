import {Container , AppBar , Typography , Grow , Grid} from '@material-ui/core';
import ShowSession from '../showSession/showSession.js';
import CreateSchedule from '../createSchedule/createSchedule.js';
import CreateCourse from '../createCourse/createCourse.js'
import ShowCourse from '../showCourse/showCourse.js'
//import StudentSchedule from './studentSchedule';

import '../../App.css';
import useStyles from '../../styles';
function Admin() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth = "lg">
        <AppBar className = {classes.appBar} position="static" color="inherit" >
          <Typography className={classes.heading} variant="h2" align="center">Admin Dashboard</Typography>  
        </AppBar>
        <Grow in>
          <Container >
            <Grid container justify="space-between" alignItems="strect" >
              <Grid item xs={13} sm={13}>
                <AppBar className={classes.appBar} position="sticky" color="inherit" >
                  <CreateCourse /> 
                  
                  
                </AppBar>
              </Grid>

            </Grid>
            <Grid container justify="space-between" alignItems="strect" >

            <Grid item xs={13} sm={13} >   
            <AppBar className={classes.appBar} position="sticky" color="inherit" >
 
                    <ShowCourse/>
                    </AppBar>

                  </Grid>   
             </Grid>

            <Grid container justify="space-between" alignItems="strect" >
              <Grid item xs={13} sm={15}>
                <AppBar className={classes.appBar} position="sticky" color="inherit" >
                  <CreateSchedule /> 
                  <Grid item xs={15} sm={15} > 
                    <ShowSession/>
                  </Grid>
                </AppBar>
                
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
      
    </div>
  );
}

export default Admin;
