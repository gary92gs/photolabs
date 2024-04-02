import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { id, location, urls, user } = props.itemInfo;
  const toggleModalDisplay = props.appStateObj.toggleModalDisplay;

  const classNames = {};
  switch (props.elementFor){
    case 'modal main-image':
      classNames['itemImage'] = 'photo-details-modal__image';
      classNames['userContainer'] = 'photo-details-modal__photographer-details';
      classNames['userImage'] = 'photo-details-modal__photographer-profile';
      classNames['userInfoContainer'] = 'photo-details-modal__photographer-info';
      break;
    case 'modal similar-images':
      classNames['itemImage'] = 'photo-list__image';
      classNames['userContainer'] = 'photo-details-modal__photographer-details';
      classNames['userImage'] = 'photo-details-modal__photographer-profile';
      classNames['userInfoContainer'] = 'photo-details-modal__photographer-info';
      break;
    case 'main images':
      classNames['itemImage'] = 'photo-list__image';
      classNames['userContainer'] = 'photo-list__user-details';
      classNames['userImage'] = 'photo-list__user-profile';
      classNames['userInfoContainer'] = 'photo-list__user-info';
      break;
  }

  return (
    <div className="photo-list__item">
      <PhotoFavButton id={id} appStateObj={props.appStateObj} />
      <img onClick={() => toggleModalDisplay(props.itemInfo)} src={urls.full} className={classNames.itemImage} alt="posting image" />
      <div className={classNames.userContainer}>
        <img src={user.profile} className={classNames.userImage} alt="photographer image" />
        <div className={classNames.userInfoContainer}>
          <p >{user.username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
