const mongoose = require('mongoose');
const { Schema } = mongoose;
const productsCollection = 'products';

const productsSchema = new Schema({
    title: { type: String, max:100, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
});

const productsModel = mongoose.model(productsCollection, productsSchema);

module.exports = { productsModel };