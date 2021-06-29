import  mongoose  from 'mongoose';

const courseSchema = mongoose.Schema({
    CourseId:Number,
    description:String,
    creditHours:Number,
    major:String
});

const course = mongoose.model('course' , courseSchema);

export default course;
