import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { state, toggleFavourite } = props.appStateObj;
  const id = props.id;
  
  const isFavourite = state.favourites.includes(id);

  return (
    <div onClick={() => toggleFavourite(id)} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;