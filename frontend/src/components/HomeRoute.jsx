import React from 'react';

import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';


const HomeRoute = (props) => {
  const {photos, topics} = props;

  return (
    <>
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos}/>
    </>
  );
};

export default HomeRoute;