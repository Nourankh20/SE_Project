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

  const [sessionsList , setSessionsList] = useState([])

  

  useEffect(() => {
      axios.get('http://localhost:5000/sessions').then( (allSessions) => {
          setSessionsList(allSessions.data);
      } )
  }, [])
  

  return (
    <> 
    <h2>All Sessions</h2> 
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
           
   
            <TableCell align="center">Course Id</TableCell>    
            <TableCell align="center">Day</TableCell>
            <TableCell align="center">T-Number</TableCell>
            <TableCell align="center">Slot</TableCell>
            <TableCell align="center">Location</TableCell>
             <TableCell align="center">TA id</TableCell> 
             <TableCell align="center">type</TableCell> 

          </TableRow>
        </TableHead>
        <TableBody>
          {sessionsList.map((session , key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">  
                <TableCell  align="center">{
                    <label>{session.CourseId}</label>
             
              
              }
              </TableCell>
              
                 </TableCell>  
                 <TableCell  align="center">{
                    <label>{session.Day}</label>
             
              
              }
              </TableCell>   
              <TableCell  align="center">{
                    <label>{session.tutorialNo}</label> 
              }
              </TableCell>
             
              <TableCell  align="center">{
                    <label>{session.Slot}</label> 
              }
              </TableCell>
              <TableCell  align="center">{
                    <label>{session.Location}</label> 
              }
              </TableCell>


              <TableCell  align="center">{
                    <label>{session.TAid}</label> 
              }
              </TableCell>
              <TableCell  align="center">{
                    <label>{session.Stype}</label> 
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
