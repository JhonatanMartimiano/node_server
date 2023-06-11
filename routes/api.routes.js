const express = require("express"),
	router = express.Router(),
	testController = require("./../controllers/api/test.controller")

router.post("/test", testController.test)

module.exports = router
