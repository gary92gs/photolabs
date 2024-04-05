import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { itemInfo, updateCategoryFilter } = props;
  // console.log('props', props);
  // console.log('itemInfo', itemInfo);
  // console.log('updateCategoryFilter', updateCategoryFilter);

  return (
    <div className="topic-list__item" onClick={() => updateCategoryFilter(itemInfo.id)} >
      <span>{itemInfo.title}</span>
    </div>
  );
};

export default TopicListItem;
