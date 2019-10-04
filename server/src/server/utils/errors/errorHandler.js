import errors from './applicationErrors';
import errorTypes from './errorTypes';

module.exports = (err, req, res, next) => {
    const error = new errors[errorTypes[err.path]]();
    res.status(error.status).send(error);
};