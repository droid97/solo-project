const express = require("express");
const asyncHandler = require("express-async-handler");
const { Review } = require("../../db/models");
const {  User } = require('../../db/models');
const router = express.Router();

const { check } = require('express-validator');
const { requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');

router.get('', asyncHandler(async (req, res) => {
  console.log("reviews es de este lugar")
           const reviews = await Review.findAll(({
             include: [{ model: User }]
          }))
          //console.log(reviews, "reviewsssssssss");

           await res.json(reviews)

}));

// router.get(
//     "", asyncHandler, (async (req, res) => {
//       console.log("reviews")
//         const reviews = await Review.findAll(({
//         include: [{ model: User }]
//       }))
    //   console.log(reviews, "reviewsssssssss");

    //   await res.json(comments)
    // }));


//  router.post(
//    "/",
//      asyncHandler(async (req, res) => {
//  const { userId, propertyId, reviewHeader, reviewBody } = req.body;
//  const newReview = await Review.create({
//     userId,
//      propertyId,
//      reviewHeader,
//      reviewBody
//  })
//  return res.json(newReview);
//      })
  // );


  const validateReview = [
    check('reviewHeader')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a Review title.')
      .isLength({ max: 300 })
      .withMessage('Please provide a Review with max length 300 characters.'),
    check('reviewBody')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a Review body.'),
    handleValidationErrors
  ];





  router.post(
    "/:id/add",  validateReview, requireAuth,
    asyncHandler(async (req, res) => {
       //console.log(req.body,"algoooooooooooooooo")
      const { userId, propertyId, reviewHeader, reviewBody } = req.body;
      const newReview = await Review.create({
        userId,
        propertyId,
       commentHeader: reviewHeader,
        commentBody: reviewBody
      });
      return res.json(newReview);
    }));


  router.delete(
    "/:reviewId/delete",
    asyncHandler(async (req, res, next) => {
      const reviewId = req.params.reviewId;
      const review = await Review.findByPk(reviewId);
      if (review) {
        await review.destroy();
        res.status(204).end();
      } else {
        next(errorMessage(reviewId));
      }
    })
  );

  module.exports = router;
