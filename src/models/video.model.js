import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
  {
    videoFile: {
      Type: String,
      required: true,
    },
    thumbnail: {
      Type: String,
      required: true,
    },
    owner: {
      Type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      Type: String,
      required: true,
    },
    description: {
      Type: String,
      required: true,
    },
    duration: {
      Type: Number,
      required: true,
    },
    views: {
      Type: Number,
      default: 0,
    },
    isPublished: {
      Type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema);
