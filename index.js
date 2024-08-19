const express = require("express");
const app = express();

app.use(express.json());

const coursesRouter = require('./routes/courses.rout')

app.use('/api/courses', coursesRouter);

app.listen("5001", () => {
  console.log("listening to port 5001");
});
