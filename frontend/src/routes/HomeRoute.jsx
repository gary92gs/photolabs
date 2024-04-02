import React from 'react';

import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';



const HomeRoute = (props) => {

  return (
    <>
      <TopNavigation {...props} />
      <PhotoList {...props} elementFor={'main images'} />
    </>
  );
};

export default HomeRoute;