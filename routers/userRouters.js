const router = require("express").Router()
const UserController = require('../controllers/userController')

router.get("/", UserController.getAllUsers)

module.exports = router