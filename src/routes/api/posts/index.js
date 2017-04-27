const validation = require('../../../middlewares/validation');
const Posts = require('../../../models/Posts');
const validators = require('./validators');

module.exports = routes;

function routes(router) {
	router.get('/',
		(req, res) => res.promise(Posts.findAll({attributes: ["title", "pid"]})));

	router.post('/',
		(req, res) => res.promise(Posts.createPost(req.body)));

	router.get('/:pid',
		(req, res) => res.promise(Posts.findOne({where: {pid: req.params.pid}})));

	router.get('/:pid/comments/',
		(req, res) => res.promise(Comments.findAll({where: {pid: req.params.pid}}))); // gets all comments for this pid

	}