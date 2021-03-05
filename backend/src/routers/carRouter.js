const express = require('express');
const router = express.Router();

var cars = [
  {
    plate: "1D2F01",
    make: "Subaru",
    model: "Impreza",
    year: 2019,
    color: "blue"
  },
  {
    plate: "2E5D9L",
    make: "BMW",
    model: "X5",
    year: 2020,
    color: "white"
  },
]

// define the car route
router.get('/car', (req, res) => {
  if (req.query.plate) {
    res.send(cars.find(car => car.plate === req.query.plate));
  } else {
    res.send(cars);
  }
});

module.exports = router;