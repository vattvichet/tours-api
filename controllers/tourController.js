const fs = require('fs');
let tours = null;
try {
  tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
  );
} catch (e) {
  console.log(e);
}

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: tours,
  });
};

exports.getTourByID = (req, res) => {
  console.log(req.params.id);
  res.send(req.params.id);
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({
      message: 'name is required',
    });
  }
  next();
};
