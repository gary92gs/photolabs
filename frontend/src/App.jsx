import React from 'react';
import { useAppState } from './hooks/useAppState';

import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import photos from 'mocks/photos';
import topics from 'mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const defaultState = {
    favourites: [],
    modalInfo: {},
  };

  const { state, dispatch } = useAppState(defaultState);

  const toggleFavourite = (photoId) => {
    dispatch({ type: 'toggleFavourite', data: photoId });
  };

  //photoObj should be empty {} if modal is closing onClick
  const toggleModalDisplay = (photoObj) => {
    dispatch({type: 'displayModal', data: photoObj});
  };

  return (
    <div className="App">
      <h1>{state.modalInfo.length}</h1>
      <HomeRoute photos={photos} topics={topics} favouritesState={state.favourites} toggleFavourite={toggleFavourite} toggleModalDisplay={toggleModalDisplay} />
      {state.modalInfo.id && <PhotoDetailsModal modalInfo={state.modalInfo} toggleModalDisplay={toggleModalDisplay}/>}
    </div>
  );
};

export default App;
