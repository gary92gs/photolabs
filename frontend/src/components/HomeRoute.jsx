import React from 'react';
import { useAppState } from '../hooks/useAppState';

import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';



const HomeRoute = (props) => {

  const defaultState = {
    favourites: [],
  };

  const { state, dispatch } = useAppState(defaultState);
  const { photos, topics } = props;

  const toggleFavourite = (photoId) => {
    dispatch({ type: 'toggleFavourite', data: photoId });
  };

  return (
    <>
      <TopNavigation topics={topics} favouritesState={state.favourites}/>
      <PhotoList photos={photos} favouritesState={state.favourites} toggleFavourite={toggleFavourite} />
    </>
  );
};

export default HomeRoute;