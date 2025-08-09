import ContentModel from "../model/contentModel.js";
const createContent = async (req, res) => {
  try {
    const { content_goal, pick_tone, language, topic, keywords } = req.body;
    const newContent = {
      content_goal,
      pick_tone,
      language,
      topic,
      keywords,
    };
    const created_content = await ContentModel.create(newContent);

    res.status(200).send(created_content);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const getContent = async (req, res) => {
  try {
    const allContent = await ContentModel.find();

    res.status(200).send({
      data: allContent,
    });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

export { createContent, getContent };
