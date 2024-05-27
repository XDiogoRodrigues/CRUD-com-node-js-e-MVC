const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/page_insert_user", UserController.pageInsertUser);
router.get("/page_delete_user", UserController.pageDeleteUser);
router.get("/page_update_user", UserController.pageUpdateDataUser);
router.get("/selection_all_users", UserController.selectionAllUsers);

router.post("/create_user", UserController.createUser);
router.post("/delete_user", UserController.deleteUser);
router.post("/update_user", UserController.updateDataUser);

module.exports = router;
