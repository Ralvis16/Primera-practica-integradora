
const { Router } = require('express')
const router = Router()
const { MessageManagerMongo } = require('../Daos/Mongo/messageManager')
const messageManager = new MessageManagerMongo()

router.get('/', async (req, res) => {
    const messages = await messageManager.getMessages()
    res.json(messages)
})

router.post('/', async (req, res) => {
    const newMessage = req.body
    const message = await messageManager.createMessage(newMessage)
    res.json(message)
})

module.exports = router

