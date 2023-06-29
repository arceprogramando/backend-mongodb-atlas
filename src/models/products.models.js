import mongoose from 'mongoose';

const userCollection = 'products';

const userSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const productModel = mongoose.model(userCollection, userSchema);

export default productModel;
