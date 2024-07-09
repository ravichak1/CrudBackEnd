const { Schema, model, default: mongoose } = require("mongoose");

const friendRequestSchema = new Schema({
  from: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    default: "pending",
  },
});

const FriendRequest = model("User", friendRequestSchema);
module.exports = FriendRequest;
