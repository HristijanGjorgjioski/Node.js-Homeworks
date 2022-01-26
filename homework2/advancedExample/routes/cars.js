const express = require('express');
const router = express.Router();

const { getCars, createCar, getCreateCar } = require('../controllers/cars')

const cars = [
  {
    model: 'Mercedes',
    color: 'Black',
    year: '2016',
  },
]

/* GET cars listing. */
// router.get('/', function(req, res, next) {
//   res.render('cars/index', { title: 'Cars', cars });
// });

router.get('/', getCars);

router.get('/create-car', function(req, res, next) {
  res.render('cars/createCar', { title: 'Create Car' });
});

router.get('/create-car', getCreateCar);

// router.post('/create-car', (req, res) => {
//   cars.push(req.body);
  
//   res.redirect('/cars');
// })

router.post('/create-car', createCar)

module.exports = router;
