const knex = require("../db/connection");

function list() {
    return knex("movies").select("*");
}

function listMoviesShowing() {
    return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .select("m.*")
    .where({ "mt.is_showing": true })
    .distinct("m.movie_id") // removes duplicate rows
    .orderBy("m.movie_id")
}

function read(movie_id) {
    return knex("movies")
    .select("*")
    .where({ movie_id })
    .first(); // Displays only first item
}

module.exports = {
    list,
    listMoviesShowing,
    read,
}

// READ HERE FIRST MOTHA FUCKA
// You just completed the routes for /movies and /movies?is_showing
// Next: Complete route for /:movieId([0-9+])