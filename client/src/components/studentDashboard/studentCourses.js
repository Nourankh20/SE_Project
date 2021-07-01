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

import '../../App.css'



const useStyles = makeStyles({
  table: {
    minWidth: 150,
  },
});



export default function ShowSession() {
  const classes = useStyles();

  const [coursesList , setCoursesList] = useState([])

  

  useEffect(() => {
      axios.get('http://localhost:5000/course').then( (allCourses) => {
          setCoursesList(allCourses.data);
      } )
  }, [])


  return (
    <> 
    <h2>All Courses</h2> 
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            
   
            <TableCell align="center">Course Id</TableCell>    
            <TableCell align="center">Course name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Credit Hours</TableCell>
            <TableCell align="center">Faculty</TableCell>
            

          </TableRow>
        </TableHead>
        <TableBody>
          {coursesList.map((course , key) => (
            <TableRow key={key}> 
              <TableCell component="th" scope="row">  
                <TableCell  align="center">{
                    <label>{course.Faculty=="Computer Science"?course.CourseId:""}</label>
             
              
              }
              </TableCell>
              
                 </TableCell>  
                 <TableCell  align="center">{
                    <label>{course.Faculty=="Computer Science"?course.CourseName:""}</label>
             
              
              }
              </TableCell>   
              <TableCell  align="center">{
                    <label>{course.Faculty=="Computer Science"?course.description:""}</label> 
              }
              </TableCell>
             
              <TableCell  align="center">{
                    <label>{course.Faculty=="Computer Science"?course.creditHours:""}</label> 
              }
              </TableCell>

              <TableCell  align="center">{
                    <label>{course.Faculty=="Computer Science"?course.Faculty:""}</label>
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
