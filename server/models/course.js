import  mongoose  from 'mongoose';

const courseSchema = mongoose.Schema({
    CourseId:{type:Number},
    CourseName:String,
    description:String,
    creditHours:Number,
    Faculty:String
});

const course = mongoose.model('course' , courseSchema);

export default course;


