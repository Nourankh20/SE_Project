import {Container , AppBar , Typography , Grow , Grid} from '@material-ui/core';
//import Student from './components/showStudent/showStudent.js';
//import Create from './components/createStudent/createStudent.js';
import StudentCourses from './studentCourses'
import StudentSchedule from './studentSchedule';


import '../../App.css';
import useStyles from '../../styles';
function Student() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth = "lg">
        <AppBar className = {classes.appBar} position="static" color="inherit" >
          <Typography className={classes.heading} variant="h2" align="center">Student Dashboard</Typography>         
        </AppBar>
        <Grow in>
          <Container >
            <Grid container justify="space-between" alignItems="strect" >
              <Grid item xs={13} sm={15}>
                <AppBar className={classes.appBar} position="static" color="inherit" >
                  <StudentSchedule />
                  </AppBar>
         
                  <Grid item xs={15} sm={15} >
                  <AppBar className={classes.appBar} position="static" color="inherit" >
                  <StudentCourses />
                  </AppBar>
              </Grid>
                
            </Grid>

            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default Student;
