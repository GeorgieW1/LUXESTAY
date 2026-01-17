import express from 'express';
import { getAllProperties, getProperty } from '../controllers/propertyController';

const router = express.Router();

router.route('/').get(getAllProperties);
router.route('/:id').get(getProperty);

export default router;
