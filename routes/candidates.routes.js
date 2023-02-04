const express = require('express');
const router = express.Router();
const candidatesController = require('./../controllers/candidates.controller');

router.get('/candidates', candidatesController.getAllCandidates);
router.post('/candidates', candidatesController.createCandidate);
router.get('/candidates/:id', candidatesController.getCandidate);
router.put('/candidates/:id', candidatesController.updateCandidate);
router.delete('/candidates/:id', candidatesController.deleteCandidate);

module.exports = router;
