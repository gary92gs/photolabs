import React from 'react';
import { useApplicationData } from './hooks/useApplicationData';

import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const initialState = {
    photos: [],
    topics: [],
    favourites: [],
    modalInfo: {},
    categoryFilter: '',
  };

  const { state, dispatch } = useApplicationData(initialState);

  //toggles favourite icon (solid vs hollow) by adding/removing photoId from state.favourites array
  //if the photoId is already favourited, it removes the photo id from the array
  //if the photoId is not favourited, it adds the photo id to the array
  //fyi - photoListItem component compares it's own photo id to the state.favourites array when rendering
  const toggleFavourite = (photoId) => {
    dispatch({ type: 'toggleFavourite', data: photoId });
  };

  //toggles modal display by setting modalInfo state. 
  //photoObj is set to state.photos[x] when user clicks on a specific photo/listing. 
  //photoObj is set to {} when user closes the modal
  const toggleModalDisplay = (photoObj) => {
    dispatch({ type: 'displayModal', data: photoObj });
  };

  //updates the category filter state 
  //sets state.category to the corresponding integer value from the topics database when user clicks on a category in the navbar. 
  //sets state.category to '' when user clicks PhotoLabs logo (and in initial state)
  //fyi - state.category is always used when fetching photos from database. state.category is used to generate a path/url, which is then used for the db query
  const updateCategoryFilter = (categoryId) => {
    dispatch({ type: 'updateCategoryFilter', data: categoryId });
  };

  //used for grouping data for distribution via props
  const appData = {
    photos: state.photos,
    topics: state.topics,
  };

  //used for grouping data for distribution via props
  const appStateObj = {
    state,
    toggleFavourite,
    toggleModalDisplay,
    updateCategoryFilter,
  };

  return (
    <div className="App">
      <h1>{state.modalInfo.length}</h1>
      <HomeRoute appData={appData} appStateObj={appStateObj} />
      {state.modalInfo.id && <PhotoDetailsModal appData={appData} appStateObj={appStateObj} />}
    </div>
  );
};

export default App;
