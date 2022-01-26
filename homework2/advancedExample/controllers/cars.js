const Car = require('../models/cars');

// Displaying cars/index view with all cars document from database
exports.getCars = (req, res) => {
    return Car.find()
        .then(cars => {
            res.render('cars/index', {
                title: 'All Cars',
                cars,
            })
    })
    .catch(err => {
      console.log(err);
    })
}

// Just displaying Create Car view
exports.getCreateCar = (req, res) => {
    return res.render('cars/createCar', { title: 'Create Car' });
}

// POST controller
exports.createCar = (req, res) => {
    // getting model color and year from req.body and sending them to database to create new Car
    const { model, color, year } = req.body;

    // creating object that need to be saved in Car database
    const car = new Car({
        model,
        color,
        year
    })

    // saving it and the end and redirecting the user
    return car.save()
        .then((result) => {
            console.log('Car is created');
            res.redirect('/cars');
        })
}
