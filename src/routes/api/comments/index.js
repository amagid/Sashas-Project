const validation = require('../../../middlewares/validation');
const validators = require('./validators');
const Comments = require('../../../models/Comments');

module.exports = routes;

function routes(router) {
	router.get('/:pid',
		(req, res) => res.promise(Comments.findAll({where: {pid: req.params.pid}}))); // gets all comments for this pid

	router.post('/:pid',
		(req, res) => res.promise(Comments.createComment(req.body))); // create a new comment... send the pid in front end!!!!
}