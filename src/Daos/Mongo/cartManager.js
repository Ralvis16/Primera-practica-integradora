const { cartModel } = require('./models/carts.model');

class CartManagerMongo {
    constructor() {
        this.model = cartModel;
    }

    async getCarts() {
        try {
            return await this.model.find({});
        } catch (error) {
            console.log(error);
        }
    }

    async getCartBy(uid) {
        return await this.model.findOne({ id: uid });
    }

    async createCart(newCart) {
        return await this.model.create(newCart);
    }

    async updateCart() {}

    async deleteCart() {}
}

module.exports = { CartManagerMongo };
