const router = require('express').Router();

/* GET /api/v1/hellworld */
router.get('/helloworld', (req, res) => {
  res.json({ message: 'hello world!' });
});

module.exports = router;
