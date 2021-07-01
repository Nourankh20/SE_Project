import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
}));

export default function Create() {
  const classes = useStyles();

  const [course , setCourse] = useState({

    CourseId:"",
    description:"",
    creditHours:"",
    Faculty:""
    

  });

  const createCourse = () => {
      axios.post('http://localhost:5000/course' , course).then(() => {
          window.location.reload(false);
      })
  }


  
  return (
    <> 
    <h2>Create Course</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic"  type="number"label="Course Id" variant="outlined" value={course.CourseId} onChange={(event) => {
         setCourse({ ...course, CourseId: event.target.value}) 
      }} />
     
      <TextField id="outlined-basic" type="text"label="Description" variant="outlined" value={course.description} onChange={(event) => {
         setCourse({ ...course, description: event.target.value}) 
      }} />
      <TextField id="outlined-basic" type="number" label="credit Hours" variant="outlined" value={course.creditHours} onChange={(event) => {
         setCourse({ ...course, creditHours: event.target.value}) 
      }} />

      <TextField id="outlined-basic" type="text" label="CourseName" variant="outlined" value={course.CourseName} onChange={(event) => {
         setCourse({ ...course, CourseName: event.target.value}) 
      }} />
     
        <Select id="Faculty" displayEmpty  type="text" variant="outlined"  label="Faculty" value={course.Faculty} onChange={(event) => {
         setCourse({ ...course, Faculty: event.target.value}) 
      }}>
             <MenuItem value="" disabled>Faculty</MenuItem>
            <MenuItem value="Computer Science">Computer Science</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="Engineering">Engineering</MenuItem>
            <MenuItem value="Design">Design</MenuItem>
            
            
            
        </Select>
          
      <Button variant="contained" color="primary" onClick={createCourse}>
        Create 
      </Button>
    </form>
    </>
  );
}
