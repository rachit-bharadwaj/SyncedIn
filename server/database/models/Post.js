import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema(
  {
    text: {
      type: String,
      trim: true,
    },

    images: [
      {
        type: String,
        trim: true,
      },
    ],

    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    comments: [
      {
        text: {
          type: String,
          trim: true,
        },
        likes: [
          {
            type: Schema.Types.ObjectId,
            ref: "User",
          },
        ],

        replies: [
          {
            text: {
              type: String,
              trim: true,
            },
            likes: [
              {
                type: Schema.Types.ObjectId,
                ref: "User",
              },
            ],
            userDetails: {
              type: Schema.Types.ObjectId,
              ref: "User",
            },
          },
        ],

        userDetails: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],

    reposts: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    creatorDetails: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },

  { timestamps: true }
);

export default mongoose.models.Post ||
  mongoose.model("Post", PostSchema, "posts");
