import mongoose from "mongoose";

const contentModelSchema = mongoose.Schema({
  content_goal: {
    type: String,
  },
  pick_tone: {
    type: String,
  },
  language: {
    type: String,
  },
});

const ContentModel = mongoose.model("contentModel", contentModelSchema);
export default ContentModel;
