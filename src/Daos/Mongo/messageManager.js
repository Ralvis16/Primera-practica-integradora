const {messageModel} = require('./models/messages.model');

class MessageManagerMongo {
    constructor() {
        this.model = messageModel
    }
    async getMessages(){
        try {
            return await this.model.find({})
        } catch (error) {
            console.log(error)
        }
    }
    async createMessage(newMessage){
        return await this.model.create(newMessage)
    }
}

module.exports = { MessageManagerMongo }