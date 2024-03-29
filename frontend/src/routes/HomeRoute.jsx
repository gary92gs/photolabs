import React from 'react';

import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';



const HomeRoute = (props) => {
  const { photos, topics, favouritesState, toggleFavourite, toggleModalDisplay} = props;
  // const defaultState = {
  //   favourites: [],
  // };

  // const { state, dispatch } = useAppState(defaultState);
  // const { photos, topics } = props;

  // const toggleFavourite = (photoId) => {
  //   dispatch({ type: 'toggleFavourite', data: photoId });
  // };

  return (
    <>
      <TopNavigation topics={topics} favouritesState={favouritesState}/>
      <PhotoList photos={photos} favouritesState={favouritesState} toggleFavourite={toggleFavourite} toggleModalDisplay={toggleModalDisplay}/>
    </>
  );
};

export default HomeRoute;