const express = require('express');
const { getCompanies, createCompany, updateCompany, deleteCompany } = require('../controllers/company');
const router = express.Router();

router.get('/', getCompanies);
router.post('/', createCompany);
router.patch('/:id', updateCompany);
router.delete('/:id', deleteCompany);

module.exports = router;
