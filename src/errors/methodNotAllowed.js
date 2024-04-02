// Handles incorrect HTTP methods for existing routes. Place at end of each route in router files.
function methodNotAllowed(req, res, next) {
    next({
        status: 405,
        message: `${req.method} not allowed for ${req.originalUrl}`,
    });
}

module.exports = methodNotAllowed;