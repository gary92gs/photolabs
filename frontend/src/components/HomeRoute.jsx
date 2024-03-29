import React from 'react';
import { useFavourites } from '../hooks/useFavourites';

import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';



const HomeRoute = (props) => {
  console.log('rendering')
  const defaultState = {
    favourites: [],
  };

  const { state, dispatch } = useFavourites(defaultState);
  const { photos, topics } = props;

  const toggleFavourite = (photoId) => {
    console.log('received photo id', photoId);
    dispatch({ type: 'toggleFavourite', data: photoId });
  };

  return (
    <>
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} favouritesState={state.favourites} toggleFavourite={toggleFavourite} />
    </>
  );
};

export default HomeRoute;