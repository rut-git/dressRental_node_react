const express = require("express")
const router = express.Router()
const UserController = require("../controller/userController")
const verifyJWT = require("../middleware/verifyJWT")

router.use(verifyJWT)
router.get("/", UserController.getUsers)
router.post("/", UserController.createUser)
router.put("/:id", UserController.updateUser)
router.delete("/:id", UserController.deleteUser)
router.get("/:id", UserController.getUserById)

module.exports = router