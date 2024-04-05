import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {

  const { appData, appStateObj, elementFor } = props;

  return (
    <ul className="photo-list">
      {appData.photos.map(element => <PhotoListItem key={element.id} itemInfo={element} appStateObj={appStateObj} elementFor={elementFor} />)}
    </ul>
  );
};

export default PhotoList;
