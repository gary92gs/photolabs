import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {

  const photos = props.appData.photos;
  const listContainerClassName = props.isModal ? 'photo-details-modal__images':'photo-list'

  return (
    <ul className="photo-list">
      {photos.map(element => <PhotoListItem key={element.id} itemInfo={element} appStateObj={props.appStateObj}/>)}
    </ul>
  );
};

export default PhotoList;
