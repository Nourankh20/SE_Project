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

  const [sessionsList , setSessionsList] = useState([])
  const [session , setSession] = useState({

    CourseId:"",
    tutorialNo:"",
    Day:"",
    Slot:"",
    Location:"",
    TAid:""
  });

  

  const deleteSession = (id) => {
      axios.delete(`http://localhost:5000/sessions/${id}`).then( () => {
          window.location.reload(false);
      })
  }
 
  const updateSession = (id) => {
    axios.post(`http://localhost:5000/sessions/${id}`, session).then( () => {
        window.location.reload(false);
    })
}





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
            <TableCell align="center">Faculty</TableCell> 
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {sessionsList.map((session , key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">  
               
              <TableCell  align="center">{
               <TextField id="CourseId" type="number" label={"Course Id: "+session.CourseId} variant="outlined"   onChange={(event) => {
                 setSession({ ...session, CourseId: event.target.value}) 
                }} />
              }
              </TableCell>
              
                 </TableCell>  
                 <InputLabel>{session.Day}
              <TableCell align="center">{
                
                <Select id="Stype" type="text" variant="outlined" label={session.Day}  onChange={(event) => {
                 setSession({ ...session, Day: event.target.value}) 
              }}>
                 <MenuItem value="Saturday">Saturday</MenuItem>
                 <MenuItem value="Sunday">Sunday</MenuItem>
                 <MenuItem value="Monday">Monday</MenuItem>
                 <MenuItem value="Tuesday">Tuesday</MenuItem>
                 <MenuItem value="Wednesday">Wednesday</MenuItem>
                 <MenuItem value="Thursday">Thursday</MenuItem>

                    
                </Select>
               }</TableCell> 
              </InputLabel>    
           <TableCell  align="center">{
                <TextField id="tutorialNo" type="number" label={"tutorialNo: "+session.tutorialNo} variant="outlined"   onChange={(event) => {
                  setSession({ ...session, tutorialNo: event.target.value})
               }} />
              
              }
              </TableCell>
             
              <InputLabel> {session.Slot}
              <TableCell align="center">{
             
            <Select id="Slot" label={session.Slot} variant="outlined"  onChange={(event) => {
              setSession({ ...session, Slot: event.target.value}) 
           }}>
                 
                 <MenuItem value="First">First</MenuItem>
                 <MenuItem value="Second">Second</MenuItem>
                 <MenuItem value="Third">Third</MenuItem>
                 <MenuItem value="Fourth">Fourth</MenuItem>
                 <MenuItem value="Fifth">Fifth</MenuItem>
                 
                 
                 
             </Select>
              }
              </TableCell> </InputLabel>
              <TableCell align="center">{
              <TextField id="Location" type="text"label={"Location: "+session.Location} variant="outlined" onChange={(event) => {
              setSession({ ...session, Location: event.target.value}) 
              }} 
/>
              }</TableCell>


              <TableCell align="center">{
              <TextField id="TAid" type="number" label={"TAid: "+session.TAid} variant="outlined" onChange={(event) => {
              setSession({ ...session, TAid: event.target.value}) 
              }} />
              }</TableCell> 
              <InputLabel>{session.Faculty}
              <TableCell align="center">{
                
                <Select id="Faculty" type="text" variant="outlined" label={session.Faculty}  onChange={(event) => {
                 setSession({ ...session, Faculty: event.target.value}) 
              }}>
                    <MenuItem value="" disabled>Faculty</MenuItem>
            <MenuItem value="Computer Science">Computer Science</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="Engineering">Engineering</MenuItem>
            <MenuItem value="Design">Design</MenuItem>
            
                    
                </Select>
               }</TableCell> 
              </InputLabel>
              
              <TableCell align="right">
              <IconButton aria-label="edit" className={classes.margin} onClick={
                  () => {
                   session.CourseId=document.getElementById("CourseId").value;
                   session.tutorialNo=document.getElementById("tutorialNo").value;
                   session.Day=document.getElementById("Day").value;
                   session.Slot=document.getElementById("Slot").value;
                   session.Location=document.getElementById("Location").value;
                   session.TAid=document.getElementById("TAid").value; 
                   session.Faculty=document.getElementById("Faculty").value; 
                   
                   updateSession(session._id) 
                  }
              }>



                  <EditIcon fontSize="small" />
        </IconButton> 
        </TableCell>
        <TableCell align="right">
              <IconButton aria-label="delete" className={classes.margin} onClick={
                  () => deleteSession(session._id)
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
