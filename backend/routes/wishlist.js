const express = require('express');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const {
  addToWishlist,
  removeFromWishlist,
  getUserWishlist,
} = require('../controllers/wishlistController');

router.route('/add/:productId').post(isAuthenticatedUser, addToWishlist);
router.route('/remove/:productId').put(isAuthenticatedUser, removeFromWishlist);
router.route('/').get(isAuthenticatedUser, getUserWishlist);

module.exports = router;
