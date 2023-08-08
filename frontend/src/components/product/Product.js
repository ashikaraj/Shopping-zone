import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../../actions/wishlistActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, col }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const [isInWishlist, setIsInWishlist] = useState(wishlist.wishlistItems.some((item) => item.product === product._id));

  const handleToggleWishlist = (productId) => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(productId));
    } else {
      dispatch(addToWishlist(productId));
    }
    setIsInWishlist(!isInWishlist); // Toggle the state
  };

  return (
    <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
      <div className="card p-3 rounded">
        <img className="card-img-top mx-auto" src={product.images[0].url} alt={product.name} />
        <div className="card-body d-flex flex-column">
          <div className="d-flex align-items-center mb-3">
            <h5 className="card-title mb-0 flex-grow-1">
              <Link to={`/product/${product._id}`}>{product.name}</Link>
            </h5>
          </div>
          <div className="ratings mt-auto">
            {/* Ratings and Reviews content */}
          </div>
          <p className="card-text mb-0">₹{product.price}</p>
          <FontAwesomeIcon
            icon={isInWishlist ? faHeartSolid : faHeartRegular}
            onClick={() => handleToggleWishlist(product._id)}
            className={`heart-icon ml-auto mt-0 ${isInWishlist ? 'text-danger' : ''}`}
          />
          <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
