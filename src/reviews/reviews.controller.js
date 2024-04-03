const service = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// Validation Middleware

async function reviewExists(req, res, next) {
    const review = await service.read(req.params.reviewId);
    if (review) {
        res.locals.review = review;
        return next();
    }
    next({ status: 404, message: "Review cannot be found."})
}

// CRUD Function

async function update(req, res) {
    const updatedReview = {
        ...response.locals.review,
        ...request.body.data,
        review_id: response.locals.review.review_id,
      };
      const data = await service.update(updatedReview);
      res.json({ data })
}

async function destroy(req, res) {
    const { review } = res.locals;
    await service.destroy(review.review_id);
    res.sendStatus(204);
}

module.exports = {
    update: [
        asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)
    ],
    delete: [
        asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)
    ]
}