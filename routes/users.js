const router = require("express").Router();
const {
  getUsers,
  getUserById,
  getCurrentUser,
  updateProfile,
} = require("../controllers/users");

router.get("/", getUsers);
router.get("/me", getCurrentUser);
router.get("/:userId", getUserById);
router.patch("/me", updateProfile);

module.exports = router;
