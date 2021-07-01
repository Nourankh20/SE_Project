import express from 'express'
import { getGrade, createGrade , findGrade, updateGrade} from '../controllers/grade.js';
import grade from '../models/grade.js';

const router = express.Router();

router.get('/' , getGrade)
router.get('/:id' , findGrade)
router.post('/:id' , updateGrade)
router.post('/' , createGrade)


export default router;