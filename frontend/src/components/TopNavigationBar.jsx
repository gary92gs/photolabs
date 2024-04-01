import React from 'react';

import '../styles/TopNavigationBar.scss';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  
  const topics = props.appData.topics;
  const favourites = props.appStateObj.state.favourites;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge isFavPhotoExist={favourites.length} />
    </div>
  );
};

export default TopNavigation;