const express = require("express");
const mumblingRouter = require("./routes/mumbling");

const app = express();
app.use(express.json());
app.use(mumblingRouter);

module.exports = app;
