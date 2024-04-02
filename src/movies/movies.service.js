const knex = require("../db/connection");

function list() {
    return knex("movies").select("*");
}

module.exports = {
    list,
}

// READ HERE FIRST MOTHA FUCKA
// You just successfully ran your seed files
// You then created all necessary folders and  for theaters, reviews, and movies routes
// Finish up the routes in each file