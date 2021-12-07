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


module.exports = router;
