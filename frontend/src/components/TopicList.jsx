import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const {topics, updateCategoryFilter} = props;
  // console.log('props', props);

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(element => <TopicListItem key={element.id} itemInfo={element} updateCategoryFilter={updateCategoryFilter} />)}
    </div>
  );
};

export default TopicList;
