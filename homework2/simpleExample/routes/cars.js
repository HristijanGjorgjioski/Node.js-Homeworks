const express = require('express');
const router = express.Router();

const cars = [
  {
    model: 'Mercedes',
    color: 'Black',
    year: '2016',
  },
]

/* GET cars listing. */
router.get('/', function(req, res, next) {
  res.render('cars/index', { title: 'Cars', cars });
});

router.get('/create-car', function(req, res, next) {
  res.render('cars/createCar', { title: 'Create Car' });
});

router.post('/create-car', (req, res) => {
  cars.push(req.body);
  
  res.redirect('/cars');
})

module.exports = router;
