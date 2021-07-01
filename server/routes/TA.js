import express from 'express'
import {createTA , getTAs, deleteTA, getTASessions} from '../controllers/TA.js';
import TA from '../models/TA.js';

const router = express.Router();


router.post('/' , createTA);
//router.get('/' , getTAs);
router.delete('/:id',deleteTA);
router.get('/',getTASessions);

export default router;