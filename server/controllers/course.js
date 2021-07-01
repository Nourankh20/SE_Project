
import course from '../models/course.js';
import CourseData from '../models/course.js';

export const getCourses = async (req , res)=> {
    try {
        const allCourses = await CourseData.find();

        res.status(200).json(allCourses);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createCourse = async (req , res)=> {
    const course = req.body;

    const newCourse = new CourseData(course);

    
    try {
        if(CourseData.find({CourseId:req.body.CourseId})){
        await newCourse.save();
        res.status(201).json(newCourse);
        }
    } catch (error) {
        alert("e5tar id tany plez");
        res.status(409).json({message: error.message});
    }
}


export const deleteCourse = async (req , res)=> {
    const id = req.params.id;

    try {

       await CourseData.findByIdAndRemove(id).exec(); 
       res.send('Successfully Removed!')
    } catch (error) {
        console.log(error);
    }
}


export const findCourse = async (req , res)=> {
    const id = req.params.id;
 
    try {
       
       await CourseData.findById(id).exec(); 
       res.send('Successfully Recieved!')
      
    }
     catch (error) {
        console.log(error);
    }

}

export const updateCourse = async (req , res)=> {
    const id = req.params.id;
    await CourseData.findById(req.params.id, function (err, tmp){
    if(!tmp)
        console.log("error")
    else{
        
        tmp.CourseId=req.body.CourseId;
        tmp.description=req.body.description;
        tmp.creditHours=req.body.creditHours;
        tmp.Faculty=req.body.Faculty;
        tmp.CourseName=req.body.CourseName;
        
        CourseData.findByIdAndUpdate(req.params.id,tmp).exec()
        tmp.save().then(tmp => {
        res.json('Course Updated Successfully');
            })
        .catch(err => {
        res.status(400).send("Unable To Update Course");
        } );     
        }   
    });
}

    





