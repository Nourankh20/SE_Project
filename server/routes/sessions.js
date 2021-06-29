import express from 'express'
import { getSessions,deleteSession, createSession , findSession, updateSession} from '../controllers/session.js';
import sessions from '../models/session.js';

const router = express.Router();

router.get('/' , getSessions)
router.get('/:id' , findSession)
router.post('/:id' , updateSession)
router.post('/' , createSession)
router.delete('/:id',deleteSession);

export default router;