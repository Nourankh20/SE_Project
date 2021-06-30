import TAData from '../models/TA.js'

//import StudentData from '../models/student.js';
import SessionData from '../models/session.js';

export const getTAs = async (req , res)=> {
    try {
        const allTAs = await TAData.find();

        res.status(200).json(allTAs);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getTASessions = async (req , res)=> {
    try {
        const allTAs = await SessionData.find();

        res.status(200).json(allTAs);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


export const createTA = async (req , res)=> {
    const TA = req.body;

    const newTA = new TAData(TA);

    try {
        await newTA.save();
        res.status(201).json(newTA);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}


export const deleteTA = async (req , res)=> {
    const id = req.params.id;

    try {

       await TAData.findByIdAndRemove(id).exec(); 
       res.send('Successfully Removed!')
    } catch (error) {
        console.log(error);
    }
}



