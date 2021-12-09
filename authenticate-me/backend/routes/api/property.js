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
    console.log(req.body,"holaaaaaaaaaaaaaaa");
    const property = await Property.create(req.body);
    res.json(property)
}))

router.put("/:listingId(\\d+)/edit", asyncHandler(async (req, res) => {
    console.log(req.body,"editadooooooooo");
    const propertylistingId = req.params.listingId
    const property = await Property.findByPk(propertylistingId);
    const updatedProperty = req.body;

await property.update(updateProperty);
    res.json(property)
}))

module.exports = router;
