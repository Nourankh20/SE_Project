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







export default function ShowTutorials() {
  const classes = useStyles();
  const [TAsList , setTAsList] = useState([])
  const [TA , setTAList] = useState({
    CourseId:"",
    tutorialNo:"",
    CourseName:""
  });
   useEffect(() => {
      axios.get(`http://localhost:5000/sessions`).then( (allTAs) => {
          setTAsList(allTAs.data);
      } )
  }, [])

 

  
  return (
    <> 
    <h2>All TA</h2> 
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Tutorial number</TableCell>
            <TableCell align="center">Course Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TAsList.map((session , key) => (
            <TableRow key={key}>
              <TableCell  align="center">{
               <label >{session.tutorialNo===3?session.tutorialNo:"" }</label>}
              </TableCell>
              <TableCell  align="center">{
               <label >{session.tutorialNo===3?session.CourseId:""}</label>}
               
              </TableCell>
            
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

