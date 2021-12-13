const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth } = require('../../utils/auth')

const { Property } = require("../../db/models");

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


router.get("/", asyncHandler(async (req, res) => {
    const property = await Property.findAll();
    res.json(property)
})
);


const validateProperty = [

    check('name')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a name.')
      .isLength({ max: 200 })
      .withMessage('Name with max length 200 characters.'),

      check('address')
      .exists({ checkFalsy: true })
      .withMessage('Please provide an address.')
      .isLength({ max: 200 })
      .withMessage('Name with max length 200 characters.'),

      check('city')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a city.')
      .isLength({ max: 200 }),

      check('state')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a state.'),

      check('country')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a state.'),

      check('price')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a price.')
      .isInt({min: 1})
      .withMessage('Price must be a number.'),

      check('title')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a state.'),

     check('description')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a valid description.')
      .isLength({ max: 5000 })
      .withMessage('Please provide a valid description with max length 3000 characters.'),

      check('imageUrl')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a valid description.'),


    handleValidationErrors
  ];





router.post("/", validateProperty, requireAuth, asyncHandler(async (req, res) => {

    const property = await Property.create(req.body);
    res.json(property)
}))





const validateEdit = [

        check('name')
          .exists({ checkFalsy: true })
          .withMessage('Please provide a name.')
          .isLength({ max: 200 })
          .withMessage('Name with max length 200 characters.'),

          check('address')
          .exists({ checkFalsy: true })
          .withMessage('Please provide an address.')
          .isLength({ max: 200 })
          .withMessage('Name with max length 200 characters.'),

          check('city')
          .exists({ checkFalsy: true })
          .withMessage('Please provide a city.')
          .isLength({ max: 200 }),

          check('state')
          .exists({ checkFalsy: true })
          .withMessage('Please provide a state.'),

          check('country')
          .exists({ checkFalsy: true })
          .withMessage('Please provide a state.'),

          check('price')
          .exists({ checkFalsy: true })
          .withMessage('Please provide a price.')
          .isInt({min: 1})
          .withMessage('Price must be a number.'),

          check('title')
          .exists({ checkFalsy: true })
          .withMessage('Please provide a state.'),

         check('description')
          .exists({ checkFalsy: true })
          .withMessage('Please provide a valid description.')
          .isLength({ max: 5000 })
          .withMessage('Please provide a valid description with max length 3000 characters.'),

          check('imageUrl')
          .exists({ checkFalsy: true })
          .withMessage('Please provide a valid description.'),


        handleValidationErrors
      ];






router.put("/:propertyid(\\d+)", validateEdit, requireAuth, asyncHandler(async (req, res) => {

     const propertyListingId = req.params.propertyid
    const property = await Property.findByPk(propertyListingId);

     const updatedProperty = req.body;


      await property.update(updatedProperty);
    res.json(property)
}))

router.delete("/:propertylistings(\\d+)",
asyncHandler(async (req, res, next) => {

     const propertyListingId = req.params.propertylistings;
         const property = await Property.findByPk(propertyListingId);
         if (property) {
             await property.destroy();
             res.status(204).end();
         } else {
             next(errorMessage(propertyListingId))
         }
    })
);


module.exports = router;
