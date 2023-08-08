import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserWishlist, removeFromWishlist } from '../../actions/wishlistActions';
import Loader from '../layout/Loader';

const Wishlist = () => {
  const dispatch = useDispatch();

  const { loading, error, wishlistItems } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(getUserWishlist());
  }, [dispatch]);

  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  return (
    <Fragment>
      <h1 className='wishlist'>Wishlist</h1>
      {loading ? <Loader /> : null}

      {/* Display error message if there's an error */}
      {error ? <div className="alert alert-danger">{error}</div> : null}

      {/* Display wishlist items */}
      {wishlistItems.map((item) => (
        <div key={item.product} className="wishlist-item">
          <Link to={`/product/${item.product}`}>{item.name}</Link>
          <button onClick={() => handleRemoveFromWishlist(item.product)}>Remove</button>
        </div>
      ))}
    </Fragment>
  );
};

export default Wishlist;
