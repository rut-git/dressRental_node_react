const express = require("express")
const router = express.Router()
const DressController = require("../controller/dressController")
const verifyJWT = require("../middleware/verifyJWT")

router.use(verifyJWT)
router.get("/", DressController.getDresses)
router.post("/", DressController.createDress)
router.put("/:id", DressController.updateDress)
router.delete("/:id", DressController.deleteDress)
router.get("/:id", DressController.getDressById)

module.exports = router