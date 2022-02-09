const mongoose = require("mongoose");
const Player = require("../models/player");

exports.getPlayers = async (req, res) => {
  const players = await Player.find().populate("club").populate("agent");

  res.render("players/index", { players });
};

exports.getCreateForm = async (req, res) => {
  res.render("players/create");
};

exports.createPlayer = async (req, res) => {
  const { name, position, birth_date, club, agent } = req.body;

  try {
    await Player.create({
      name,
      position,
      birth_date,
      club,
      agent,
    });

    res.redirect("/players");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.updatePlayer = async (req, res) => {
  await Player.findByIdAndUpdate(req.params.id, req.body);
  const player = await Player.findById(req.params.id);

  if (!mongoose.Types.ObjectId.isValid(player._id))
    return res.status(404).send(`No player with id: ${player._id}`);

  res.status(201).send({
    error: null,
    message: `Company with id #${player._id} has been updated`,
    player,
  });
};

exports.deletePlayer = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No player with id: ${id}`);

  await Player.findByIdAndDelete(id);

  res.redirect("/players");
};
