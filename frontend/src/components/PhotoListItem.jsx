import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  //deconstruct sampledata/props
  const {id, location, imageSource, username, profile} = props.itemInfo;

  /* Insert React */
  return (
    <div key={id} className="photo-list__item">
      <img src={imageSource} className="image" alt="posting image" />
      <footer>
        <img src={profile} className="user-profile" alt="photographer image" />
        <div>
          <h3 className="">{username}</h3>
          <h3 className="user-location">{location.city}, {location.country}</h3>
        </div>
      </footer>
    </div>
  )
};

export default PhotoListItem;
