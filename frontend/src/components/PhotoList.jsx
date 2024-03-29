import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const {photos, favouritesState, toggleFavourite} = props;

  return (
    <ul className="photo-list">
      {photos.map(element => <PhotoListItem key={element.id} itemInfo={element} favouritesState={favouritesState} toggleFavourite={toggleFavourite} />)}
    </ul>
  );
};

export default PhotoList;
