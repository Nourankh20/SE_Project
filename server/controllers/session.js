import CourseData from '../models/course.js'
import SessionData from '../models/session.js';

export const getSessions = async (req , res)=> {
    try {
        const allStudents = await SessionData.find();

        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


export const createSession = async (req , res)=> {
    const session = req.body;

    const newSession = new SessionData(session);

    try {
       
            await newSession.save();
            res.status(201).json(newSession);
        
        
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}


export const deleteSession = async (req , res)=> {
    const id = req.params.id;

    try {

       await SessionData.findByIdAndRemove(id).exec(); 
       res.send('Successfully Removed!')
    } catch (error) {
        console.log(error);
    }
}


export const findSession = async (req , res)=> {
    const id = req.params.id;
 
    try {
       
       await SessionData.findById(id).exec(); 
       res.send('Successfully Recieved!')
      
    }
     catch (error) {
        console.log(error);
    }

}

export const updateSession = async (req , res)=> {
    const id = req.params.id;
    await SessionData.findById(req.params.id, function (err, tmp){
    if(!tmp)
        console.log("error")
    else{
        tmp.CourseId=req.body.CourseId;
        tmp.tutorialNo=req.body.tutorialNo;
        tmp.Day=req.body.Day;
        tmp.Slot=req.body.Slot;
        tmp.Location=req.body.Location;
        tmp.TAid=req.body.TAid;
        tmp.Faculty=req.body.Faculty;
        SessionData.findByIdAndUpdate(req.params.id,tmp).exec()
        tmp.save().then(tmp => {
        res.json('Session Updated Successfully');
            })
        .catch(err => {
        res.status(400).send("Unable To Update Session");
        } );     
        }   
    });
}

    



