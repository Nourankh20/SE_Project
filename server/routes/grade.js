import express from 'express'
import { getGrades,deleteGrade, createGrade , findGrade, updateGrade} from '../controllers/grade.js';
import sessions from '../models/session.js';

const router = express.Router();

router.get('/' , getGrades)
router.get('/:id' , findGrade)
router.post('/:id' , updateGrade)
router.post('/' , createGrade)
router.delete('/:id',deleteGrade);

export default router;