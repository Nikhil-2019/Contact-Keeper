const express = require('express');

const router = express.Router();

//@route  POST api/users
//@desc   Register a user
//@acess  Public

router.post('/', (req, res) => {
    res.send("Registers a User")
});

module.exports  = router;