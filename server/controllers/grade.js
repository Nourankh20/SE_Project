import CourseData from '../models/course.js'
import GradeData from '../models/session.js';

export const getGrades = async (req , res)=> {
    try {
        const allGrades = await GradeData.find();
        res.status(200).json(allGrades);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}



export const createGrade = async (req , res)=> {
    const session = req.body;

    const newSession = new GradeData(session);

    try {
       
            await newSession.save();
            res.status(201).json(newSession);
        
        
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}


export const deleteGrade = async (req , res)=> {
    const id = req.params.id;

    try {

       await GradeData.findByIdAndRemove(id).exec(); 
       res.send('Successfully Removed!')
    } catch (error) {
        console.log(error);
    }
}


export const findGrade = async (req , res)=> {
    const id = req.params.id;
 
    try {
       
       await GradeData.findById(id).exec(); 
       res.send('Successfully Recieved!')
      
    }
     catch (error) {
        console.log(error);
    }

}

export const updateGrade = async (req , res)=> {
    const id = req.params.id;
    await GradeData.findById(req.params.id, function (err, tmp){
    if(!tmp)
        console.log("error")
    else{
        tmp.CourseId=req.body.CourseId;
        tmp.tutorialNo=req.body.tutorialNo;
        tmp.TAid=req.body.TAid;
        tmp.Faculty=req.body.Faculty;
        GradeData.findByIdAndUpdate(req.params.id,tmp).exec()
        tmp.save().then(tmp => {
        res.json('Grade Updated Successfully');
            })
        .catch(err => {
        res.status(400).send("Unable To Update Grade");
        } );     
        }   
    });
}

    



