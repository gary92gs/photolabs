import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {

  const photos = props.appData.photos;

  return (
    <ul className="photo-list">
      {photos.map(element => <PhotoListItem key={element.id} itemInfo={element} appStateObj={props.appStateObj} elementFor={props.elementFor}/>)}
    </ul>
  );
};

export default PhotoList;
