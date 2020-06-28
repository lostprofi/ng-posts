const express = require('express');
const config = require('config');
const connectDb = require('./dataBase/connectDb');
const PostModel = require('./dataBase/models');

const app = express();
const PORT = config.get('serverPort');

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS',
  );
  next();
});

app.post('/', async (req, res) => {
  try {
    const { title, postText } = req.body;

    const newPost = new PostModel({
      title,
      postText,
    });

    const postIsExist = await PostModel.findOne({ title });

    if (postIsExist) {
      return res.send('Post is already exist');
    }

    await newPost.save();

    const posts = await PostModel.find();

    res.json(posts);
  } catch (err) {
    console.log(err);
  }
});

app.get('/', async (req, res) => {
  try {
    const posts = await PostModel.find();

    res.json(posts);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

connectDb();
