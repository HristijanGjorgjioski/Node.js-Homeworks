const express = require("express");

const router = express.Router();

const {
  getClubs,
  createClub,
  updateClub,
  deleteClub,
  getCreateForm,
} = require("../controllers/club");

router.get("/", getClubs);
router.post("/", createClub);
router.get("/create", getCreateForm);
router.patch("/:id", updateClub);
router.post("/delete/:id", deleteClub);

module.exports = router;
