const {Router} = require('express');

const router = Router();

const {db} = require('../firebase')

router.get('/', async (req ,res) => {

    const query = await db.collection('alimentos').get()

    console.log(query.docs[0].data());

    const resultado = query.docs.map((doc) => ({
        ...doc.data(),
    }));

    res.render('index', {resultado})
})

module.exports = router;