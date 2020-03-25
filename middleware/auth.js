const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
	//get token from header

	const token = req.header('x-auth-token');

	//Check if not token
	if (!token) {
		return res.status(401).json({ msg: 'No token authorization denied' });
	}

	try {
		//getting the payload
		const decode = jwt.verify(token, config.get('jwtSecret'));
		//assigning the user
		req.user = decode.user;

		//To jump to next piece of middleware
		next();
	} catch (err) {
		res.status(401).json({ msg: 'Token is not valid' });
	}
};
