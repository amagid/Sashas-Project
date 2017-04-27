const Sequelize = require('sequelize');
const mysql = require('../services/mysql');
const db = mysql.connection();

const Posts = module.exports = db.define('posts', {
	pid: {
        field: 'pid',
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        primaryKey: true
    },
	post: {
		field: 'post',
		type: Sequelize.DataTypes.STRING,
		allowNull: true
	},
	username: {
        field: 'username',
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    title: {
    	field: 'title',
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Title',
    }
}, {
	classMethods: {
		createPost
	}
});

function createPost(data) {
	const {title, username, post} = data;

	const queryString = `insert into posts (title, username, post) values ("${title}", "${username}", "${post}");`;
	return mysql.executeQuery(queryString);
}