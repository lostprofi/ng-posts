const mongoose = require('mongoose');

const { Schema } = mongoose;

const postShema = new Schema(

  {
    title: {
      type: String,
      required: true,
    },

    postText: {
      type: String,
      required: true,
    },
  },
);

const PostModel = mongoose.model('Post', postShema);

module.exports = PostModel;
