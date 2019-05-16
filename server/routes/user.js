const router = require('express').Router();
const { login, signup, logout } = require('../controllers/user/user');

router.post('/login', login);
router.get('/logout', logout);
router.post('/signup', signup);

module.exports = router;
