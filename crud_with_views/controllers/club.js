const mongoose = require("mongoose");
const Club = require("../models/club");

exports.getClubs = async (req, res) => {
  const clubs = await Club.find().populate("player");

  // res.status(200).json(clubs);
  res.render("clubs/index", { clubs });
};

exports.getCreateForm = async (req, res) => {
  res.render("clubs/create");
};

exports.getClubById = async (req, res) => {
  const { id } = req.params;

  try {
    const club = await Club.findById(id);

    res.status(200).json({
      error: null,
      message: "Club successfully finded",
      club,
    });
  } catch (error) {
    res.status(404).json({ message: "Club not found" });
  }
};

exports.createClub = async (req, res) => {
  const { name, country, player } = req.body;

  try {
    await Club.create({ name, country, player });

    res.redirect("/clubs");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.updateClub = async (req, res) => {
  await Club.findByIdAndUpdate(
    req.params.id,
    { $push: { player: req.body.player } },
    req.body
  );
  const club = await Club.findById(req.params.id);

  if (!mongoose.Types.ObjectId.isValid(club._id))
    return res.status(404).send(`No post with id: ${club._id}`);

  res.status(201).send({
    error: null,
    message: `Club with id #${club._id} has been updated`,
    club,
  });
};

exports.deleteClub = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No club with id: ${id}`);

  await Club.findByIdAndDelete(id);

  res.redirect("/clubs");
};
