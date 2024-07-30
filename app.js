const fs = require('fs');
const express = require('express');
const app = express();
const tourRouter = require('./routes/tourRoutes');

app.use(express.json());

app.use('/api/v1/tours', tourRouter);

module.exports = app;
