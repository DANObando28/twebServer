const express = require('express');
const router = express.Router();

const ctrlUSer = require('../controllers/user.controller');
const ctrlIncident = require('../controllers/incidents.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUSer.register);
router.post('/authenticate', ctrlUSer.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUSer.userProfile);
router.post('/registerincident',ctrlIncident.register);
router.get('/listincident',ctrlIncident.listincident);

module.exports = router;