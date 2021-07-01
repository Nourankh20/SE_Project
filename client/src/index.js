import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import StudentDashboard from './components/studentDashboard/studentDashboard';
import AdminDashboard from './components/adminDashboard/adminDashboard'
import TADashboard from './components/TADashboard/TADashboard'

const role=3;



// role==1 is student
if(role===1){
ReactDOM.render(
<StudentDashboard/>,
document.getElementById('root')

);}



  


if(role===2 ){
  ReactDOM.render(
  
    <TADashboard/>,
    
  document.getElementById('root')
);
}


//user.role==3 is admin
if(role===3){
  
  ReactDOM.render(
  <AdminDashboard/>,
  document.getElementById('root')
  
  );
  }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
