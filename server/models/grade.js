import  mongoose  from 'mongoose';

const gradeSchema = mongoose.Schema({
    CourseId:{type:Number,required:true},
    tutorialNo:{type:Number,required:true},
    studentID:{type:Number,required:true},
    grade:{type:String,required:true},
    TAid:{type:Number,required:true}
});

const grade = mongoose.model('grade' , gradeSchema);

export default grade;