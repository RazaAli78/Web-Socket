import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true
            },
    price: {
      type: String,
            },
    description: {
      type: String,
    },
    mediaFiles:[{type: String}],
  },
  {
    timestamps: true,
  }
  );
  const product = model('product', productSchema);
  
  export default product;