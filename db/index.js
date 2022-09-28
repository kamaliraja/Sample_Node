const mongoose = require('mongoose');

let connection = null;

module.exports.connect = (option) => {
  if (mongoose.connection.readyState === 0 && connection == null) {
    connection = mongoose.connect(option, (err) => {
      if (err) {
        console.log(`while connecting to DB error : ${err}`);
      }
    });

    mongoose.connection.on('open', () => {
      console.log('DB connected successfully...');
    });

    return connection;
  }
};