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
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';



import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles({
  table: {
    minWidth: 150,
  },
});



export default function ShowSession() {
  const classes = useStyles();

  const [coursesList , setCoursesList] = useState([])
  const [course , setCourse] = useState({

    CourseId:" ",
    description:" ",
    creditHours:" ",
    Faculty:" ",
    CourseName:""
    
  });

  

  const deleteCourse = (id) => {
      axios.delete(`http://localhost:5000/course/${id}`).then( () => {
          window.location.reload(false);
      })
  }
 
  const updateCourse = (id) => {
    axios.post(`http://localhost:5000/course/${id}`, course).then( () => {
        window.location.reload(false);
    })
}





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
            <TableCell align="center">Faculty</TableCell>  
             <TableCell align="center">Description</TableCell> 
             <TableCell align="center">creditHours</TableCell>
             <TableCell align="center">Course Name</TableCell>

            <TableCell align="center">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {coursesList.map((course , key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">  
               
              <TableCell  align="center">{
               <TextField id="CourseId" type="number" label={"Course Id: "+course.CourseId} variant="outlined"   onChange={(event) => {
                 setCourse({ ...course, CourseId: event.target.value}) 
                }} />
              }
              </TableCell>
              
                 </TableCell>  
                 <InputLabel>{course.Faculty}
              <TableCell align="center">{
                
                <Select id="Faculty" type="text" displayEmpty variant="outlined" label={course.Faculty}  onChange={(event) => {
                  setCourse({ ...course, Faculty: event.target.value}) 
              }}>
                 <MenuItem value="" disabled>Faculty</MenuItem>
                 <MenuItem value="Computer Science">Computer Science</MenuItem>
                 <MenuItem value="Business">Business</MenuItem>
                 <MenuItem value="Engineering">Engineering</MenuItem>
                 <MenuItem value="Design">Design</MenuItem>
                    
                </Select>
               }</TableCell> 
              </InputLabel>    
           <TableCell  align="center">{
                <TextField id="description" type="text" label={"description: "+course.description} variant="outlined"   onChange={(event) => {
                  setCourse({ ...course, description: event.target.value})
               }} />
              
              }
              </TableCell>
             
             
             


              <TableCell align="center">{
              <TextField id="creditHours" type="number" label={"creditHours: "+course.creditHours} variant="outlined" onChange={(event) => {
              setCourse({ ...course, creditHours: event.target.value}) 
              }} />
              }</TableCell> 
              
              <TableCell align="center">{
              <TextField id="CourseName" type="text" label={"CoureName: "+course.CourseName} variant="outlined" onChange={(event) => {
              setCourse({ ...course, CourseName: event.target.value}) 
              }} />
              }</TableCell> 
              

              <TableCell align="right">
              <IconButton aria-label="edit" className={classes.margin} onClick={
                  () => {
                   course.CourseId=document.getElementById("CourseId").value;
                   course.description=document.getElementById("description").value;
                   course.creditHours=document.getElementById("creditHours").value;
                   course.Faculty=document.getElementById("Faculty").value;
                   course.CourseName=document.getElementById("CourseName").value;
                
                   
                   updateCourse(course._id) 
                  }
              }>



                  <EditIcon fontSize="small" />
        </IconButton> 
        </TableCell>
        <TableCell align="right">
              <IconButton aria-label="delete" className={classes.margin} onClick={
                  () => deleteCourse(course._id)
              }>
          <DeleteIcon fontSize="small" />
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
