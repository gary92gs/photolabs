import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const sampleArrayPhotoListItems = [];
for(let i = 0; i < 3; i++){
  sampleArrayPhotoListItems.push(<PhotoListItem key={i} itemInfo={sampleDataForPhotoListItem}/>) ;
};

// Note: Rendering a single component to build components in isolation
const App = () => {


  return (
    <div className="App">
      {sampleArrayPhotoListItems}
    </div>
  );
};

export default App;
