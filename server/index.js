import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';
import sessionRoutes from './routes/sessions.js';
import courseRoutes from './routes/course.js'
import TARoutes from './routes/TA.js'
import GradeRoutes from './routes/grade.js'
//import UserRoutes from './login.js'

const app = express();


app.use(bodyParser.json({limit: "20mb" , extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb" , extended:true}));


app.use(cors());
app.use('/sessions' , sessionRoutes);
app.use('/student', studentRoutes);
app.use('/course' , courseRoutes);
app.use('/TA', TARoutes);
app.use('/grade', GradeRoutes);
//app.use('/User', UserRoutes);

//app.use();

const CONNECTION_URL = 'mongodb+srv://admin:adminpass@cluster0.ucucw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true , useUnifiedTopology:true
}).then(() => app.listen(PORT, () => 
    console.log(`connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));




mongoose.set('useFindAndModify',false);
