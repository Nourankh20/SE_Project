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

  const [session , setSession] = useState({

    CourseId:"",
    tutorialNo:"",
    Day:"",
    Slot:"",
    Location:"",
    TAid:"",
    Stype:""

  });

  const createSession = () => {
      axios.post('http://localhost:5000/sessions' , session).then( () => {
          window.location.reload(false);
      })
  }

  return (
    <> 
    <h2>Create Session</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic"  type="number"label="Course Id" variant="outlined" value={session.CourseId} onChange={(event) => {
         setSession({ ...session, CourseId: event.target.value}) 
      }} />
     
      <TextField id="outlined-basic" type="number"label="Tutorial number" variant="outlined" value={session.tutorialNo} onChange={(event) => {
         setSession({ ...session, tutorialNo: event.target.value}) 
      }} />
      <TextField id="outlined-basic" label="Location" variant="outlined" value={session.Location} onChange={(event) => {
         setSession({ ...session, Location: event.target.value}) 
      }} />


      <TextField id="outlined-basic" type="number" label="TA id" variant="outlined" value={session.TAid} onChange={(event) => {
         setSession({ ...session, TAid: event.target.value}) 
      }} />  
     
     
        <Select id="Stype" displayEmpty  type="text" variant="outlined"  label="Type" value={session.Stype} onChange={(event) => {
         setSession({ ...session, Stype: event.target.value}) 
      }}>
            <MenuItem value="" disabled>Type</MenuItem>
            <MenuItem value="Lecture">Lecture</MenuItem>
            <MenuItem value="Lab">Lab</MenuItem>
            <MenuItem value="Tutorial">Tutorial</MenuItem>
            
            
        </Select>
               
        
     
       
       <Select id="Day" type="text" displayEmpty variant="outlined"  InputLabel="Day" value={session.Day} onChange={(event) => {
              setSession({ ...session, Day: event.target.value}) 
           }}>
                  <MenuItem value="" disabled>Day</MenuItem>
                 <MenuItem value="Saturday">Saturday</MenuItem>
                 <MenuItem value="Sunday">Sunday</MenuItem>
                 <MenuItem value="Monday">Monday</MenuItem>
                 <MenuItem value="Tuesday">Tuesday</MenuItem>
                 <MenuItem value="Wednesday">Wednesday</MenuItem>
                 <MenuItem value="Thursday">Thursday</MenuItem>

                 
             </Select>
           
     
      <Select id="Slot" type="text" displayEmpty variant="outlined"  InputLabel="Slot" value={session.Slot} onChange={(event) => {
              setSession({ ...session, Slot: event.target.value}) 
           }}>
                 <MenuItem value="" disabled>Slot</MenuItem>
                 <MenuItem value="First">First</MenuItem>
                 <MenuItem value="Second">Second</MenuItem>
                 <MenuItem value="Third">Third</MenuItem>
                 <MenuItem value="Fourth">Fourth</MenuItem>
                 <MenuItem value="Fifth">Fifth</MenuItem>
                 
                 
             </Select>
    
      
      <Button variant="contained" color="primary" onClick={createSession}>
        Create 
      </Button>
    </form>
    </>
  );
}
