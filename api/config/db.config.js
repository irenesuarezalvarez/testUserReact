const mongoose = require('mongoose');

const DB_NAME = "mongodb://127.0.0.1:27017/mytest";

mongoose
  .connect(DB_NAME)
  .then(() =>
    console.log(`Successfully connected to the database ${DB_NAME}`)
  )
  .catch((error) => {
    console.error(
      `An error ocurred trying to connect to the database ${DB_NAME}: `,
      error
    );
    process.exit(1);
  })