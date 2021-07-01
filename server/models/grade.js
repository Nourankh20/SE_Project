
import  mongoose  from 'mongoose';

const gradeSchema = mongoose.Schema({
    CourseId:Number,
    tutorialNo:Number,
    Faculty:String,
    TAid:Number
});

const grade = mongoose.model('grade' , gradeSchema);

export default grade;

