/**
 * Using POST params update or save a cooler to the database
 * If res.locals.cooler is there, it's an update otherwise this middleware creates an entity
 * Redirects to /companys/:companyId after success
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        next();
    };
};