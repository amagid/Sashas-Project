const Promise = require('bluebird');

module.exports = validate;

function validate(validator) {
    return (req, res, next) => {
        validator(req);

        return req.getValidationResult().then(result => {
            if (!result.isEmpty()) {
                res.promise(Promise.reject("Validation Error"));
            } else {
                next();
            }
        }).catch(error => {
            res.promise(Promise.reject("Validation Error"));
        });
    };
}