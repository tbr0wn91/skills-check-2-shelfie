
module.exports = {
    getAllProducts: (req, res, next) => {
        const database = req.app.get('database');

        database.get_products().then(products => {
            console.log(`get products worked!!`)
            res.status(200).send(products)
        }).catch(err => console.log(`problem with getting products`, err))
    },
}