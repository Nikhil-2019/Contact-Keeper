const express = require('express');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth');
const Contact = require('../models/Contact');
const router = express.Router();

//@route  GET api/contacts
//@desc   Get all users contact
//@acess  Private

router.get('/', auth, async (req, res) => {
	try {
		const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
		res.json(contacts);
	} catch (err) {
		res.status(500).send('Server Error');
		console.log(err);
	}
});

//@route  post api/contacts
//@desc   Get all users contact
//@acess  Private

router.post('/', [ auth, [ check('name', 'Name is Required').not().isEmpty() ] ], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { name, email, phone, type } = req.body;

	try {
		const newContact = new Contact({
			name: name,
			email: email,
			phone: phone,
			type: type,
			user: req.user.id
		});

		const contact = await newContact.save();
		res.json(contact);
	} catch (error) {
		console.log(error.message);
		res.status(500).send('Server Error');
	}
});

//@route  PUT api/contacts/:id
//@desc   Update contacts
//@acess  Private

router.put('/:id', (req, res) => {
	res.send('Update contact');
});

//@route  DELETE api/contacts
//@desc   Delete contact
//@acess  Private

router.delete('/:id', (req, res) => {
	res.send('Delete the contact');
});

module.exports = router;
