const Car = require('../models/cars');

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

exports.getCreateCar = (req, res) => {
    return res.render('cars/createCar', { title: 'Create Car' });
}

exports.createCar = (req, res) => {
    const { model, color, year } = req.body;

    const car = new Car({
        model,
        color,
        year
    })

    return car.save()
        .then((result) => {
            console.log('Car is created');
            res.redirect('/cars');
        })
}
