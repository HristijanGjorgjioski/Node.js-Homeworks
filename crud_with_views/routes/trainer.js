const express = require('express');
const { getTrainers, createTrainer, updateTrainer, deleteTrainer } = require('../controllers/trainer');

const router = express.Router();


router.get('/', getTrainers);
router.post('/', createTrainer);
router.patch('/:id', updateTrainer);
router.delete('/:id', deleteTrainer);

module.exports = router;
