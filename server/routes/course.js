import express from 'express'
import { getCourses,deleteCourse, createCourse , findCourse, updateCourse} from '../controllers/course.js';
import sessions from '../models/session.js';

const router = express.Router();


router.get('/' , getCourses)
router.get('/:id' , findCourse)
router.post('/:id' , updateCourse)
router.post('/' , createCourse)
router.delete('/:id',deleteCourse);

export default router;

