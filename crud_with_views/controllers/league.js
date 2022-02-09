const mongoose = require('mongoose');
const League = require('../models/league');

exports.getLeagues = async (req, res) => {
    const leagues = await League.find().populate('club');

    res.status(200).json(leagues);
}

exports.createLeague = async (req, res) => {
    const { name, country, found_date } = req.body;
    
    try {
        const player = await League.create({ name, country, found_date });
        
        res.status(200).json({
            error: null,
            message: 'Player successfully created',
            player
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    };
};

exports.updateLeague = async (req, res) => {
    await League.findByIdAndUpdate(req.params.id, req.body);
    const player = await League.findById(req.params.id);

    if (!mongoose.Types.ObjectId.isValid(player._id)) 
        return res.status(404).send(`No League with id: ${player._id}`);

    res.status(201).send({
        error: null,
        message: `League with id #${player._id} has been updated`,
        player
    });
}

exports.deleteLeague = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).send(`No League with id: ${id}`);

    await League.findByIdAndDelete(id);

    res.json({ message: "Player deleted successfully." });
}
