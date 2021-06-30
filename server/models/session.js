import  mongoose  from 'mongoose';

const sessionSchema = mongoose.Schema({
    CourseId:Number,
    tutorialNo:Number,
    Day:String,
    Slot:String,
    Faculty:String,
    Location:String,
    TAid:Number
});

const session = mongoose.model('session' , sessionSchema);

export default session;

