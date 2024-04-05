import { useReducer, useEffect } from 'react';

// action: { type, data }
const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleFavourite':
      const favouritedId = action.data;

      //if id is already favourited
      if (state.favourites.includes(favouritedId)) {
        return {
          ...state,
          //sets favourites to copy of favourites minus the matching elements (removes requested favourite by id)
          favourites: state.favourites.filter(element => element !== favouritedId),
        };
      }

      //if id is not already favourited
      else {
        return {
          ...state,
          //sets favourites to copy of favourites plus the favourited id (adds requested favourite by id)
          favourites: [...state.favourites, favouritedId],
        };
      }
      break;
    case 'displayModal':
      //action.data for modal should be empty when closing and full when opening (no need for if logic)
      return {
        ...state,
        modalInfo: action.data,
      };
      break;
    case 'loadTopics':
      return {
        ...state,
        topics: action.data,
      }
      break;
    case 'loadPhotos':
      return {
        ...state,
        photos: action.data,
      }
      break;
    case 'updateCategoryFilter':
      return {
        ...state,
        categoryFilter: action.data,
      }
  }
};

export const useApplicationData = (defaultState) => {

  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => { 
    const path = state.categoryFilter ? `api/topics/photos/${state.categoryFilter}` : 'api/photos';
    Promise.all([
      fetch('/api/topics').then(res => res.json()),
      fetch(path).then(res => res.json())
    ])
      .then(([topicsData,photosData]) => {
        dispatch({type: 'loadTopics', data: topicsData});
        dispatch({type: 'loadPhotos', data: photosData});
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      })
  }, [state.categoryFilter]);

  return { state, dispatch };
};