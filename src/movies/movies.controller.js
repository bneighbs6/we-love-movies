const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// Validation Middleware
async function movieExists(req, res, next) {
    const movie = await service.read(req.params.movieId); // Passes in the movieId parameter to read() fx in service
    if (movie) {
        res.locals.movie = movie;
        return next();
    }
    next({status: 400, message: "Movie cannot be found"})
}

async function list(req, res) {
    // Access Query parameter
    const isShowing = req.query.is_showing;

    if (isShowing === "true") {
        const data = await service.listMoviesShowing();
        res.json({ data })
    }
    res.json({ data: await service.list() })
}

function read(req, res) {
    const { movie: data } = res.locals; 
    res.json({ data });
}


module.exports = {
    list: asyncErrorBoundary(list),
    read: [asyncErrorBoundary(movieExists), read],
}