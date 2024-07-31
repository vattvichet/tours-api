const dotenv = require('dotenv');
const app = require('./app');

const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);
const PORT = process.env.PORT;

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((con) => {
    console.log('DB connected successfully');
  });

app.listen(PORT, () => {
  console.log('listening on port ' + PORT + ' ======> ' + process.env.ENV);
});
