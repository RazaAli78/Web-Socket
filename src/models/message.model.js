import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const messageSchema = new Schema(
  {
    message:{ type: String},
    sender: { type: Schema.Types.ObjectId,required: true, ref: 'user' },
    product: { type: Schema.Types.ObjectId, ref: 'product' },
    chatId:{ type: Schema.Types.ObjectId, required: true, ref: 'chat' },
    messageType:{type: String},
    seen_by:[{ type: Schema.Types.ObjectId, ref: 'user' }],
  },
    {
      timestamps: true,
    }
  );
const message = model('message', messageSchema);
export default message;