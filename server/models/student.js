import  mongoose  from 'mongoose';

const studentSchema = mongoose.Schema({
    regNo: Number,
    studentName: String,
    grade: String,
    tutorial: {
        type: String,
        default: '1'
    } ,
    Faculty:String
});

const student = mongoose.model('student' , studentSchema);

export default student;