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

module.exports = {
    list,
    listMoviesShowing
}

// READ HERE FIRST MOTHA FUCKA
// You just successfully ran your seed files
// You then created all necessary folders and  for theaters, reviews, and movies routes
// Finish up the routes in each file