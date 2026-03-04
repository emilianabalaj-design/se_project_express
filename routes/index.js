const router = require("express").Router();

const userRoutes = require("./users");
const clothingItemRoutes = require("./clothingItem");

router.use("/users", userRoutes);
router.use("/items", clothingItemRoutes);

router.use((req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

module.exports = router;
