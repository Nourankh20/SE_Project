import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Select, MenuItem } from '@material-ui/core';


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

  const [grade , setGrade] = useState({

    CourseId:"",
    tutorialNo:"",
    studentID:"",
    grade:"",
    TAid:""
  });

  const createGrade = () => {
      axios.post('http://localhost:5000/grade' , grade).then( () => {
          window.location.reload(false);
      })
  }

  return (
    <> 
    <h2>Create grade</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" type="number"label="Course Id" variant="outlined" value={grade.CourseId} onChange={(event) => {
         setGrade({ ...grade, CourseId: event.target.value}) 
      }} />

     
      <TextField id="outlined-basic" type="number"label="Tutorial number" variant="outlined" value={grade.tutorialNo} onChange={(event) => {
         setGrade({ ...grade, tutorialNo: event.target.value}) 
      }} />
      <TextField id="outlined-basic" type="number" label="TA id" variant="outlined" value={grade.TAid} onChange={(event) => {
         setGrade({ ...grade, TAid: event.target.value}) 
      }} />
      <TextField id="outlined-basic" type="number" label="studentID" variant="outlined" value={grade.studentID} onChange={(event) => {
         setGrade({ ...grade, studentID: event.target.value}) 
      }} />
        <Select id="Stype" displayEmpty  type="text" variant="outlined"  label="Type" value={grade.grade} onChange={(event) => {
         setGrade({ ...grade, grade: event.target.value}) 
      }}>
            <MenuItem value="" disabled>Grade</MenuItem>
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value="A">A</MenuItem>
            <MenuItem value="A-">A-</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
            <MenuItem value="B">B</MenuItem>
            <MenuItem value="B-">B-</MenuItem>
            <MenuItem value="C+">C+</MenuItem>
            <MenuItem value="C">C</MenuItem>
            <MenuItem value="C-">C-</MenuItem>
            <MenuItem value="D+">D+</MenuItem>
            <MenuItem value="D">D</MenuItem>
            <MenuItem value="F">F</MenuItem>
            
            
        </Select>

      <Button variant="contained" color="primary" onClick={createGrade}>
        Create 
      </Button>
    </form>
    </>
  );
}