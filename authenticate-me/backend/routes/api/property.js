const express = require("express");
const asyncHandler = require("express-async-handler");
const { Property } = require("../../db/models");

const router = express.Router();




router.get("/", asyncHandler(async (req, res) => {
    const property = await Property.findAll();
    res.json(property)
})
);

router.post("/", asyncHandler(async (req, res) => {

    const property = await Property.create(req.body);
    res.json(property)
}))

router.put("/:propertyid(\\d+)", asyncHandler(async (req, res) => {

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
