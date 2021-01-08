const router = require("express").Router();
const { db, Location, User } = require("./db");

router.get("/", async (req, res, next) => {
  const locations = await Location.findAll({ include: User });
  res.json(locations);
});

router.get("/:locationId", async (req, res, next) => {
  try {
    const location = await Location.findByPk(req.params.locationId, {
      include: { model: User },
    });
    res.json(location);
  } catch (error) {
    next(error);
  }
});

router.use((req, res, next) => {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
