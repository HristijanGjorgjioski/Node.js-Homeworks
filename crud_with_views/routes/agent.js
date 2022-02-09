const express = require('express');

const router = express.Router();

const { getAgents, createAgent, updateAgent, deleteAgent } = require('../controllers/agent');

router.get('/', getAgents);
router.post('/', createAgent);
router.patch('/:id', updateAgent);
router.delete('/:id', deleteAgent);

module.exports = router;
