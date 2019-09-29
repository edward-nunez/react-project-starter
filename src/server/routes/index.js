const router = require('express').Router();
const path = require('path');

const apiRoutes = require('./api');

router.use('/api/v1', apiRoutes);

/* Redirect to React build when no route matches */
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
