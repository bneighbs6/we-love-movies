const knex = require("../db/connection");

function destroy(review_id) {
    return knex("revies").where({ review_id }).del();
}

module.exports = {
    destroy,
}