import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const convTypeEnum = ["simple", "product"]

const chatSchema = new Schema(
  {
    conversationName:  {type: String},
    users: [{ type: Schema.Types.ObjectId,required: true, ref: 'user' }],
    product:{ type: Schema.Types.ObjectId, ref: 'product' },
    conversationType: {type: String, enum: convTypeEnum},
    lastMessage: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);
const chat = model('chat', chatSchema);
export default chat;