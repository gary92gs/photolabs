import React from 'react';

import '../styles/TopNavigationBar.scss';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {

  const topics = props.appData.topics;
  const { favourites } = props.appStateObj.state;
  const { updateCategoryFilter } = props.appStateObj;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => updateCategoryFilter('')}>PhotoLabs</span>
      <TopicList topics={topics} updateCategoryFilter={updateCategoryFilter} />
      <FavBadge isFavPhotoExist={favourites.length} />
    </div>
  );
};

export default TopNavigation;
