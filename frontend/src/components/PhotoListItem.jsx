import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = (props) => {
  console.log(props);
  //deconstruct sampledata/props
  const {location, imageSource, username, profile} = props.itemInfo;


  /* Insert React */
  return (
    <div className="photo-list__item">
      <PhotoFavButton/>
      <img src={imageSource} className="photo-list__image" alt="posting image" />
      <div className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile" alt="photographer image" />
        <div className="photo-list__user-info">
          <p >{username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
