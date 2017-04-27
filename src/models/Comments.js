const Sequelize = require('sequelize');
const Posts = require('./Posts');

const mysql = require('../services/mysql');
const db = mysql.connection();

const Comments = module.exports = db.define('comments', {
	pid: {
        field: 'pid',
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        primaryKey: true,
        references: {
            model: Posts,
            key: 'pid'
        }
    },
	comment: {
		field: 'comment',
		type: Sequelize.DataTypes.STRING,
		allowNull: true
	},
	username: {
        field: 'username',
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
}, {
	classMethods: {
        createComment
	}
});

function createComment(data) {
    const {pid, username, comment} = data;

    const queryString = `insert into comments (pid, username, comment) values ("${pid}", "${username}", "${comment}");`;
    return mysql.executeQuery(queryString);
}