const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/notes-db-app", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(db => console.log("DB is connectd"))
  .catch(err => console.log(err));
