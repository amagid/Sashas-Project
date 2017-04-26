const Promise = require('bluebird');

module.exports = attachResponsePromise;

function attachResponsePromise(req, res, next) {
    res.promise = response => {
        return Promise.resolve(response)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(error => {
                console.log(error);
                res.status(error.status || error.statusCode || 500).json(error.message || 'Unknown Error');
            })
            .catch(error => {
                console.error(error);
                res.status(500, 'Unknown Error');
            });
    };
    next();
}