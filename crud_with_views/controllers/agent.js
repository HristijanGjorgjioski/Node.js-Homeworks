const mongoose = require('mongoose');
const Agent = require('../models/agent');

exports.getAgents = async (req, res) => {
    const agents = await Player.find().populate('players');

    res.status(200).json(agents);
}

exports.createAgent = async (req, res) => {
    const { name, country, players } = req.body;
    
    try {
        const agent = await Agent.create({ name, country, players });
        
        res.status(200).json({
            error: null,
            message: 'Agent successfully created',
            agent
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    };
};

exports.updateAgent = async (req, res) => {
    await Agent.findByIdAndUpdate(
        req.params.id, 
        { $push: { players: req.body.players } },
        req.body
    );
    const agent = await Player.findById(req.params.id);

    if (!mongoose.Types.ObjectId.isValid(agent._id)) 
        return res.status(404).send(`No Agent with id: ${agent._id}`);

    res.status(201).send({
        error: null,
        message: `Agent with id #${agent._id} has been updated`,
        agent
    });
}

exports.deleteAgent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).send(`No agent with id: ${id}`);

    await Agent.findByIdAndDelete(id);

    res.json({ message: "Player deleted successfully." });
}
