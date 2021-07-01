import React , {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import AuthService from '../../Services/AuthService.js';


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

  const [user , setUser] = useState({
    name:"",
    password:"",
    role:0
  });

  const login = () => {
      axios.post('http://localhost:5000/Users', user).then(() => {
          window.location.reload(false);
      })
  }
  const onSubmit = e =>{
    e.preventDefault();
    AuthService.login(user).then(data=>{
        console.log(data);
        const { isAuthenticated,user,message} = data;
        
    });
}

  
  return (
    <> 
    <h2>Login</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic"  type="text"label="name" variant="outlined" value={user.name} onChange={(event) => {
         setUser({ ...user, name: event.target.value}) 
      }} />
     
      <TextField id="outlined-basic" type="text"label="password" variant="outlined" value={user.password} onChange={(event) => {
         setUser({ ...user, password: event.target.value}) 
      }} />
       <TextField id="outlined-basic" type="number"label="role" variant="outlined" value={user.role} onChange={(event) => {
         setUser({ ...user, role: event.target.value}) 
      }} />
      <Button variant="contained" color="primary" onClick={login}>
        Login 
      </Button>
    </form>
    </>
  );
}
