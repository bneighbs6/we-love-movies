const knex = require("../db/connection");
const reduceProperties = require("../utils/reduce-properties");

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

function listTheatersShowingMovie(movie_id) {
    return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .where({ "mt.movie_id": movie_id })
    .orderBy("t.theater_id");
}
// Will create a nested critic object with items returned from listMovieReviews()
// This satisfies this portion of the task:
// "This route should return all the reviews for the movie, including all the critic details added to a critic key of the review."
const reduceCritics = reduceProperties("review_id", {
    critic_id: ["critic", "critic_id"],
    preferred_name: ["critic", "preferred_name"],
    surname: ["critic", "surname"],
    organization_name: ["critic", "organization_name"],
  });


function listMovieReviews(movie_id) {
    return knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select("r.*", "c.*")
    .where({ "r.movie_id": movie_id })
    .then(reduceCritics);
}

module.exports = {
    list,
    listMoviesShowing,
    read,
    listTheatersShowingMovie,
    listMovieReviews
}