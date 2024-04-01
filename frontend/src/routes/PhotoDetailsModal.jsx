import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = (props) => {

  const { favouritesState, toggleFavourite } = props;

  const { modalInfo, toggleModalDisplay } = props;
  const { id, location, urls, user, similar_photos} = modalInfo;

  return (
    <div className="photo-details-modal">
      <button onClick={() => {toggleModalDisplay({})}} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* <div className="photo-list__item">
        <PhotoFavButton id={id} favouritesState={favouritesState} toggleFavourite={toggleFavourite} />
        <img src={urls.full} className="photo-list__image" alt="modal image" />
        <div className="photo-list__user-details">
          <img src={user.profile} className="photo-list__user-profile" alt="photographer image" />
          <div className="photo-list__user-info">
            <p >{user.username}</p>
            <p className="photo-list__user-location">{location.city}, {location.country}</p>
          </div>
        </div>
      </div> */}

      {/* <PhotoListItem/> */}

      {/* <PhotoList photos={Object.values(similar_photos)} favouritesState={favouritesState} toggleFavourite={toggleFavourite}/> */}
    </div>
  )
};

export default PhotoDetailsModal;
