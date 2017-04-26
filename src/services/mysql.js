const Sequelize = require('sequelize');
const config = require('../../config');

module.exports = {
    connect,
    connection,
    executeQuery
};

let _connection;

function connect(force = false) {
    if (!_connection || force) {
        const db = config.get().db;
        _connection = new Sequelize(db.name, db.username, db.password, db.settings);
        return _connection.authenticate()
            .then(function (err) {
                console.log('Connection has been established successfully.');
                return _connection;
            })
            .catch(function (err) {
                console.error('Unable to connect to the database:', err);
                throw err;
            });
    } else {
        return _connection;
    }
}

function connection() {
    return _connection;
}

function executeQuery(queryString) {
    return _connection.query(queryString).then(result => {
        return result[0];
    });
}