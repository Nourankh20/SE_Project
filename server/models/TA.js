import  mongoose  from 'mongoose';

const TASchema = mongoose.Schema({
    Faculty:String,
    TAid:Number
});

const TA = mongoose.model('TA' , TASchema);

export default TA;

