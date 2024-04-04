import React from 'react';
import { useApplicationData } from './hooks/useApplicationData';

import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import photos from 'mocks/photos';
import topics from 'mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const initialState = {
    photos: [],
    topics: [],
    favourites: [],
    modalInfo: {},
  };

  const { state, dispatch } = useApplicationData(initialState);

  const toggleFavourite = (photoId) => {
    dispatch({ type: 'toggleFavourite', data: photoId });
  };

  //photoObj should be empty {} if modal is closing onClick
  const toggleModalDisplay = (photoObj) => {
    dispatch({type: 'displayModal', data: photoObj});
  };

  const appData = {
    photos: state.photos,
    topics: state.topics,
  }

  const appStateObj = {
    state,
    toggleFavourite,
    toggleModalDisplay,
  }

  return (
    <div className="App">
      <h1>{state.modalInfo.length}</h1>
      <HomeRoute appData={appData} appStateObj={appStateObj} />
      {state.modalInfo.id && <PhotoDetailsModal appData={appData} appStateObj={appStateObj}/>}
    </div>
  );
};

export default App;
