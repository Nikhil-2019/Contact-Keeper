const express = require('express');

const router = express.Router();

//@route  GET api/contacts
//@desc   Get all users contact
//@acess  Private

router.get('/', (req, res) => {
    res.send("Get all contacts")
});

//@route  post api/contacts
//@desc   Get all users contact
//@acess  Private

router.post('/', (req, res) => {
    res.send("Add contacts")
});

//@route  PUT api/contacts/:id
//@desc   Update contacts
//@acess  Private

router.put('/:id', (req, res) => {
    res.send("Update contact")
});

//@route  DELETE api/contacts
//@desc   Delete contact
//@acess  Private

router.delete('/:id', (req, res) => {
    res.send("Delete the contact")
});

module.exports  = router;