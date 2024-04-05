import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = (props) => {

  const { state, toggleModalDisplay } = props.appStateObj;

  //extracts the photo ids of the modal's similar photos, creating a list of photo ids
  const similarPhotoIds = Object.values(state.modalInfo.similar_photos).map(element => element.id);
  //extracts the photos from state.photos which are listed in the modalInfo.similar photos
  //this is necessary because each individual photo's .similar_photos property contains a list of photo objects that lack the similar_photos property themselves
  //we need the similar_photos to have similar_photos of their own, for when the user clicks on a similar photo in the modal
  const similarAppData = props.appData.photos.filter(element => similarPhotoIds.includes(element.id))

  //re-creates props.appData with shorter list of photos to pass to PhotoList
  //PhotoList component operates using props.appData, so appData needs to be edited to contain the correct similar photos
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
