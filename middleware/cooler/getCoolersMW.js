/**
 * Load all cooler from the database
 * The result is saved to res.locals.coolers
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        next();
    };
};