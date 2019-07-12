
module.exports = {
    getAllProducts: (req, res, next) => {
        const database = req.app.get('database');

        database.get_products().then(products => {
            console.log(`get products worked!!`)
            res.status(200).send(products)
        }).catch(err => console.log(`problem with getting products`, err))
    },

    addProduct: (req, res, next) => {
        const database = req.app.get('database');
        const { name, price, img } = req.body;
        console.log(`${name} ${price} ${img}`)
        database.create_product([name, price, img]).then(products => {
            res.status(200).send(products)
        }).catch(err => console.log(`couldn't add product`, err))
    }
}