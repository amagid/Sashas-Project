module.exports = function mountAPI(router) {
    router.get('/', (req, res) => res.promise('Basic routing works!'));
};