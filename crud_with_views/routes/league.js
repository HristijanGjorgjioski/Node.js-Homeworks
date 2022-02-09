const express = require('express');

const router = express.Router();

const { getLeagues, createLeague, updateLeague, deleteLeague } = require('../controllers/league');

router.get('/', getLeagues);
router.post('/', createLeague);
router.patch('/:id', updateLeague);
router.delete('/:id', deleteLeague);

module.exports = router;
