const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const surveySchema = {
  title: String,
  subject: String,
  body: String,
  recipients: [String]
};

mongoose.model("surveys", surveySchema);
