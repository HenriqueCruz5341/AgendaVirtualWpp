import express from 'express';
import { list, create } from '../controllers/ContactController.js';

const router = express.Router();

router.get('/', list);
router.post('/', create);

export default router;
