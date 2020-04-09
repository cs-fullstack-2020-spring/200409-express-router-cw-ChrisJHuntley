let express = require('express');
let router = express.Router();
router.use(express.json())

router.get('/admin/:id', (req, res) => {

    res.send(`Welcome back ${req.params.id}`)

});
router.delete('/api/user/:id', (req, res) => {

    res.send(`you attempted to delete ${req.params.id} `)

});
// used this for post
//{ item_id, item_description, item_price}

 
module.exports = router;