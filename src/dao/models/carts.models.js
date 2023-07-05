import mongoose from 'mongoose';

const cartsCollection = 'carts';

const cartsSchema = new mongoose.Schema({

});

const cartsModel = mongoose.model(cartsCollection, cartsSchema);

export default cartsModel;
