import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = (props) => {

  const { state, toggleModalDisplay } = props.appStateObj;

  const similarPhotoIds = Object.values(state.modalInfo.similar_photos).map(element => element.id);
  const similarAppData = props.appData.photos.filter(element => similarPhotoIds.includes(element.id))

  //re-create props with shorter list of photos to pass to photo-list
  const editedProps = {
    ...props,
    appData: {
      photos: similarAppData,
    },
  }

  return (
    <div className="photo-details-modal">
      <button onClick={() => {toggleModalDisplay({})}} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <PhotoListItem itemInfo={state.modalInfo} {...props} elementFor={'modal main-image'}/>

      <PhotoList {...editedProps} elementFor={'modal similar-images'} />
    </div>
  )
};

export default PhotoDetailsModal;
