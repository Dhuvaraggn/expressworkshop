const express = require('express')
const healthController = require('../controllers/HealthCheckController')

const router = express.Router()
router.get("/", healthController.GetDBHealthCheck);

module.exports = router