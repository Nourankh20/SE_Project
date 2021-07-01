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



const useStyles = makeStyles({
  table: {
    minWidth: 150,
  },
});


export default function ShowGrade() {
  const classes = useStyles();

  const [gradeList , setGradeList] = useState([])
 


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

          </TableRow>
        </TableHead>
        <TableBody>
          {gradeList.map((grade , key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">  
               
              <TableCell  align="center">{
              <label >{grade.grade!==""?grade.studentID===3?grade.CourseId :"":""} </label>
              }</TableCell>
              </TableCell>
              <TableCell  align="center">
                  {
                    <label >{grade.grade!==""?grade.studentID===3?grade.tutorialNo :"":""} </label>
                  } 
               </TableCell>
              <TableCell  align="center">
                  {
                    <label >{grade.grade!==""?grade.studentID===3?grade.TAid :"":"" } </label>
                  }
              </TableCell>
              <TableCell  align="center">
                  {
                    <label >{grade.grade!==""?grade.studentID===3?grade.studentID:"":""} </label>
                  }
              </TableCell>

              <TableCell  align="center">
                  {
                    <label >{grade.grade!==""?grade.studentID===3?grade.grade:"":"" }</label>
                  }
              </TableCell>
             
       
     

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}