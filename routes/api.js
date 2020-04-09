let express = require('express');
let router = express.Router();
router.use(express.json())

router.get('/api/:id', (req, res) => {

    res.send(`you attempted to view item ${req.params.id}`)

});
router.get('/api', (req, res) => {

    res.send(`you attempted to view all items `)

});
// used this for post
//{ item_id, item_description, item_price}

 
module.exports = router;