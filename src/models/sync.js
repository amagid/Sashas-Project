// const Template = require('./Template');
const Posts = require('./Posts');
const Comments = require('./Comments');

const Promise = require('bluebird');

module.exports = sync;

function sync() {
    return Posts.sync()
    	.then(() => Comments.sync);
}