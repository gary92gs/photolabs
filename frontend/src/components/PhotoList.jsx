import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photos = props.photos;

  return (
    <ul className="photo-list">
      {photos.map(element => <PhotoListItem key={element.id} itemInfo={element} />)}
    </ul>
  );
};

export default PhotoList;
