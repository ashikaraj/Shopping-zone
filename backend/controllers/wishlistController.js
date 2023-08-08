const asyncHandler = require('express-async-handler');
const WishlistItem = require('../models/wishlistItem');

const addToWishlist = asyncHandler(async (req, res) => {
  const { productId } = req.params;

  const wishlistItem = await WishlistItem.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    user: req.user._id,
  });

  res.status(201).json(wishlistItem);
});


const removeFromWishlist = asyncHandler(async (req, res) => {
  const { productId } = req.params;

  const wishlistItem = await WishlistItem.findOneAndRemove({
    _id: productId,
    user: req.user._id,
  });

  if (wishlistItem) {
    res.json({ message: 'Product removed from wishlist' });
  } else {
    res.status(404);
    throw new Error('Product not found in wishlist');
  }
});


const getUserWishlist = asyncHandler(async (req, res) => {
  const wishlistItems = await WishlistItem.find({ user: req.user._id });

  res.json(wishlistItems);
});

module.exports = {
  addToWishlist,
  removeFromWishlist,
  getUserWishlist,
};
