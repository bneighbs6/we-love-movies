const router = require("express").Router({ mergeParams: true });
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./reviews.controller");

router.route("/:reviewId([0-9]+)")
.put(controller.update)
.delete(controller.delete)
.all(methodNotAllowed);

module.exports = router; 