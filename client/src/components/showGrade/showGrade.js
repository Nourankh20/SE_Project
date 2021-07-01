import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import IconButton  from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { MenuItem , Select} from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    minWidth: 150,
  },
});


export default function ShowGrade() {
  const classes = useStyles();

  const [gradeList , setGradeList] = useState([])
  const [grade , setGrade] = useState({

    CourseId:"",
    tutorialNo:"",
    studentID:"",
    type:"",
    Ac_grade:"",
    TAid:""
  });

  


  const updateGrade = (id) => {
    axios.post(`http://localhost:5000/grade/${id}`, grade).then( () => {
        window.location.reload(false);
    })
}



  useEffect(() => {
      axios.get('http://localhost:5000/grade').then( (allGrade) => {
          setGradeList(allGrade.data);
      } )
  }, [])

  return (
    <> 
    <h2>All grade</h2> 
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
           
   
            <TableCell align="center">Course Id</TableCell>    
            <TableCell align="center">T-Number</TableCell>
            <TableCell align="center">TA id</TableCell> 
            <TableCell align="center">studentID</TableCell>
            <TableCell align="center">grade</TableCell>
            <TableCell align="center">Edit</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {gradeList.map((grade , key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">  
               
              <TableCell  align="center">{
              <TextField id="CourseId" type="number"label={"Course Id: "+grade.CourseId }variant="outlined"  onChange={(event) => {
                setGrade({ ...grade, CourseId: event.target.value}) 
             }} />
              }
              </TableCell>
              
              </TableCell>
              <TableCell  align="center">{
                <TextField id="tutorialNo" type="number"label={"Tutorial number: "+grade.tutorialNo} variant="outlined"  onChange={(event) => {
                    setGrade({ ...grade, tutorialNo: event.target.value}) 
                 }} />
              
              }
              </TableCell>
              <TableCell align="center">{

                <TextField id="TAid" type="number" label={"TA id: "+grade.TAid} variant="outlined"  onChange={(event) => {
                     setGrade({ ...grade, TAid: event.target.value}) 
                 }} />
                }
              </TableCell> 
              <TableCell align="center">{
            
            <TextField id="studentID" type="number" label={"student ID: "+grade.studentID} variant="outlined"  onChange={(event) => {
                setGrade({ ...grade, studentID: event.target.value}) 
             }} />

              
              }
              </TableCell>
              <TableCell align="center">{
                <InputLabel>{grade.grade}
                <Select id="grade" displayEmpty  type="text" variant="outlined"  label="Type"  onChange={(event) => {
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
                </InputLabel>}
                </TableCell>
              <TableCell align="right">
              <IconButton aria-label="edit" className={classes.margin} onClick={
                  () => {
                   grade.CourseId=document.getElementById("CourseId").value;
                   grade.tutorialNo=document.getElementById("tutorialNo").value;
                   grade.studentID=document.getElementById("studentID").value;
                   grade.TAid=document.getElementById("TAid").value; 
                   grade.grade=document.getElementById("grade").value; 
                   
                   updateGrade(grade._id) 
                  }
              }>



                  <EditIcon fontSize="small" />
        </IconButton> 
        </TableCell>
       
     

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}