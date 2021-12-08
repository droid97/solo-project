// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const propertyRouter = require("./property");
const imagesRouter = require("./image");
//

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/properties', propertyRouter);

router.use('/images', imagesRouter);

// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
//   });



module.exports = router;
