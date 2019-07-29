const router = require('express').Router();
const { login, signup, logout, authorized } = require('../controllers/user');

router.get('/authorized', authorized);
router.post('/login', login);
router.get('/logout', logout);
router.post('/signup', signup);

module.exports = router;
