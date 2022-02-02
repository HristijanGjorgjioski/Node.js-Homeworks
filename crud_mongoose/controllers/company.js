const Company = require('../models/company');

exports.getCompanies = async (req, res) => {
    const company = await Company.find();

    res.status(200).json(company);
}

exports.createCompany = async (req, res) => {
    const { name, address } = req.body;
    
    try {
        const company = await Company.create({ name, address });
        
        res.status(200).json({
            error: null,
            message: 'Company successfully created',
            company
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    };
};

exports.updateCompany = async (req, res) => {
    await Company.findByIdAndUpdate(req.params.id, req.body);
    const company = await Company.findById(req.params.id);

    if (!mongoose.Types.ObjectId.isValid(company._id)) 
        return res.status(404).send(`No company with id: ${company._id}`);

    res.status(201).send({
        error: null,
        message: `Company with id #${employee._id} has been updated`,
        company
    });
}

exports.deleteCompany = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).send(`No company with id: ${id}`);

    await Company.findByIdAndDelete(id);

    res.json({ message: "Company deleted successfully." });
}
