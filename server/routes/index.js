import { Router } from 'express';
import User from './userRouter.js';

const router = new Router();

router.use('/user', User);

export default router;