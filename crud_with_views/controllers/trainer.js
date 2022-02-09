const mongoose = require('mongoose');
const Trainer = require('../models/trainer');

exports.getTrainers = async (req, res) => {
    const trainers = await Trainer.find().populate('club');

    res.status(200).json(trainers);
}

exports.createTrainer = async (req, res) => {
    const { name, club, country } = req.body;
    
    try {
        const trainer = await Trainer.create({ name, club, country });
        
        res.status(200).json({
            error: null,
            message: 'Trainer successfully created',
            trainer
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    };
};

exports.updateTrainer = async (req, res) => {
    await Trainer.findByIdAndUpdate(req.params.id, req.body);
    const trainer = await Trainer.findById(req.params.id);

    if (!mongoose.Types.ObjectId.isValid(trainer._id)) 
        return res.status(404).send(`No trainer with id: ${trainer._id}`);

    res.status(201).send({
        error: null,
        message: `Trainer with id #${trainer._id} has been updated`,
        trainer
    });
}

exports.deleteTrainer = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).send(`No trainer with id: ${id}`);

    await Trainer.findByIdAndDelete(id);

    res.json({ message: "trainer deleted successfully." });
}
