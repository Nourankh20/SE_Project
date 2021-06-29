import  mongoose  from 'mongoose';

const studentSchema = mongoose.Schema({
    regNo: Number,
    studentName: String,
    grade: String,
    tutorial: {
        type: String,
        default: 'A'
    } 
});

const student = mongoose.model('student' , studentSchema);

export default student;