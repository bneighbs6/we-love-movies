const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/:movieId([0-9]+)/reviews").get(controller.listMovieReviews).all(methodNotAllowed);

router.route("/:movieId([0-9]+)/theaters").get(controller.listTheatersShowingMovie).all(methodNotAllowed)

router.route("/:movieId([0-9]+)").get(controller.read).all(methodNotAllowed);

router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router