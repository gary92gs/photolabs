import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  //deconstruct sampledata/props
  const { id, location, urls, user } = props.itemInfo;
  const { favouritesState, toggleFavourite } = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton id={id} favouritesState={favouritesState} toggleFavourite={toggleFavourite} />
      <img src={urls.full} className="photo-list__image" alt="posting image" />
      <div className="photo-list__user-details">
        <img src={user.profile} className="photo-list__user-profile" alt="photographer image" />
        <div className="photo-list__user-info">
          <p >{user.username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
