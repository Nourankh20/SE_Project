import grade from '../models/grade.js';
import gradeData from '../models/grade.js';

export const getGrade = async (req , res)=> {
    try {
        const allGrades = await gradeData.find();

        res.status(200).json(allGrades);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createGrade = async (req , res)=> {
    const grade = req.body;

    const newGrade = new gradeData(grade);

    try {
        await newGrade.save();
        res.status(201).json(newGrade);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}



export const findGrade = async (req , res)=> {
    if(req.query.id){
        const id = req.query.id;

        gradeData.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        gradeData.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

}

export const updateGrade = async (req , res)=> {
    const id = req.params.id;
    await gradeData.findById(req.params.id, function (err, tmp){
    if(!tmp)
        console.log("error")
    else{
        tmp.CourseId=req.body.CourseId;
        tmp.tutorialNo=req.body.tutorialNo;
        tmp.grade=req.body.grade;
        tmp.studentID=req.body.studentID;
        tmp.TAid=req.body.TAid;
        gradeData.findByIdAndUpdate(req.params.id,tmp).exec()
        tmp.save().then(tmp => {
        res.json('Grade Updated Successfully');
            })
        .catch(err => {
        res.status(400).send("Unable To Update Grade");
        } );     
        }   
    });
}