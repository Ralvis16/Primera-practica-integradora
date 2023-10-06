const { Router } = require('express')
const { CartManagerMongo } = require('../Daos/Mongo/cartManager.js')

const router = Router()
let cartService = new CartManagerMongo()

router.get('/', async (req,res) => {
    try {
            let carts = await cartService.getCarts()
            res.send({
                status: 'success',
                playload: carts
            })
        } catch (error) {
            console.log(error)
        }
    }
);

router.post('/', async (req, res) =>{
    try {
        const newCart = req.body
        
        let result = await cartService.createCart(newCart)
        res.send({
            status: 'success',
            playload: result
        })
    } catch (error) {
        console.log(error)
    }
}
);

module.exports = router