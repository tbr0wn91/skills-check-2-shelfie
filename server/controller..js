
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
    },

    deleteProduct: (req, res, next) => {
        console.log("delete endpoint hit")
        const database = req.app.get('database');
        const { id } = req.params;

        database.delete_product(id)
        .then((product) => res.send(product))

    },

    updateProduct: (req, res, next) => {
        console.log("update endpoint hit")
        const database = req.app.get('database');
        const { params, query} = req;

        database.update_product([params.id, query.price])
        .then( (product) => res.send(product))
        
    }
}