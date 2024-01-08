import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      firstName: {
        type: String,
        required: true,
        trim: true,
      },
      middleName: {
        type: String,
        trim: true,
      },
      lastName: {
        type: String,
        trim: true,
      },
    },

    userName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    headline: {
      type: String,
      trim: true,
      default: "",
    },

    education: [
      {
        type: String,
        trim: true,
        default: "",
      },
    ],

    work: [
      {
        type: String,
        trim: true,
        default: "",
      },
    ],

    skills: [
      {
        type: String,
        trim: true,
        default: "",
      },
    ],

    bio: {
      type: String,
      trim: true,
      default: "",
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    profilePicture: {
      type: String,
      default: "",
    },

    coverPicture: {
      type: String,
      default: "",
    },

    about: {
      type: String,
      default: "",
    },

    address: {
      house: {
        type: String,
        default: "",
      },
      street: {
        type: String,
        default: "",
      },
      city: {
        type: String,
        default: "",
      },
      state: {
        type: String,
        default: "",
      },
      country: {
        type: String,
        default: "",
      },
      pin: {
        type: String,
        default: "",
      },
    },

    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    following: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    connections: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],

    likedPosts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],

    savedPosts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],

    notifications: [
      {
        type: Schema.Types.ObjectId,
        ref: "Notification",
      },
    ],

    chats: [
      {
        type: Schema.Types.ObjectId,
        ref: "Chat",
      },
    ],

    isOnline: {
      type: Boolean,
      default: false,
    },

    lastSeen: {
      type: Date,
      default: Date.now(),
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    verificationCode: {
      type: String,
      default: "",
    },

    resetPasswordCode: {
      type: String,
      default: "",
    },
  },

  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model("User", UserSchema, "users");
