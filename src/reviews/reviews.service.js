const knex = require("../db/connection");

function read(review_id) {
    return knex("reviews")
    .select("*")
    .where({ review_id })
    .first();
}

function update(updatedReview) {
    return knex("reviews")
    .select("*")
    .where({ review_id: updatedReview.review_id })
    .update(updatedReview, "*");
}

function destroy(review_id) {
    return knex("revies").where({ review_id }).del();
}

module.exports = {
    read,
    destroy,
}