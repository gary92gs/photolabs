import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FontAwesomeIcon icon="fa-thin fa-heart" />
      </div>
    </div>
  );
}

export default PhotoFavButton;