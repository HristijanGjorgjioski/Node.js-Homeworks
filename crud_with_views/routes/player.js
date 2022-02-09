const express = require("express");
const router = express.Router();

const {
  getPlayers,
  createPlayer,
  updatePlayer,
  deletePlayer,
  getCreateForm,
} = require("../controllers/player");

router.get("/", getPlayers);
router.post("/", createPlayer);
router.get("/create", getCreateForm);
router.patch("/:id", updatePlayer);
router.post("/delete/:id", deletePlayer);

module.exports = router;
