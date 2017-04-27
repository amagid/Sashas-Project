const express = require('express');

module.exports = function mountAPI(router) {
    // router.get('/', (req, res) => res.promise('Basic routing works!'));

    const posts = express.Router();
    const comments = express.Router();

    require('./posts')(posts);
    require('./comments')(comments);

    router.use('/posts', posts);
    router.use('/comments', comments);
};