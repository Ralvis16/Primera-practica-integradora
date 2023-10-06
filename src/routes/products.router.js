const { Router } = require('express');
const router = Router();
const { ProductManagerMongo } = require('../Daos/Mongo/productManager');
const productManager = new ProductManagerMongo();

router.get('/', async (req, res)=>{
    const products = await productManager.get()
    console.log(products)

    res.status(200).send({
        status: 'success',
        payload: products
    })
})

router.get('/:pid', async (req, res)=>{
    const {pid} = req.params
    const proudct = await productManager.getById(parseInt(pid))

    res.status(200).send({
        status: 'success',
        payload: proudct
    })
})

router.post('/', async (req, res)=>{
    const proudctNew = req.body

    const result = await productManager.add(proudctNew)

    res.status(200).send({
        stauts: 'success', 
        payload: result
    })
})

router.put('/:pid', async (req, res)=>{
    res.status(200).send('update product')
})
router.delete('/:delete', async (req, res)=>{
    res.status(200).send('delete proudct')
})

module.exports = router;