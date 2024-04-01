import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const {photos, favouritesState, toggleFavourite, toggleModalDisplay} = props;
  console.log('photos',photos)

  return (
    <ul className="photo-list">
      {photos.map(element => <PhotoListItem key={element.id} itemInfo={element} favouritesState={favouritesState} toggleFavourite={toggleFavourite} toggleModalDisplay={toggleModalDisplay}/>)}
    </ul>
  );
};

export default PhotoList;
