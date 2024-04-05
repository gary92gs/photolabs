import { useReducer, useEffect } from 'react';

// action: { type, data }
const reducer = (state, action) => {
  switch (action.type) {

    //adds or removes photoId from state.favourites depending on if the photoId is already favourited or not
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

    //Sets the state.modalInfo to identical state.photos element/object.
    //if user is opening the modal, state.modalInfo will be populated
    //if user is closing the modal, state.modalInfo will be {}, which renders nothing = closes it
    case 'displayModal':
      //action.data for modal should be empty when closing and full when opening (no need for if logic)
      return {
        ...state,
        modalInfo: action.data,
      };
      break;

    //sets state.topics array, which populates navbar with categories, which user can click and filter results by
    case 'loadTopics':
      return {
        ...state,
        topics: action.data,
      }
      break;

    //sets state.photos array, which populates the app with photos/info
    //triggered when user selects a category to filter by as well.
    case 'loadPhotos':
      return {
        ...state,
        photos: action.data,
      }
      break;
    
    //sets state.categoryFilter, which then triggers a reloading of photos/info
    //state.categoryFilter is updated when user clicks on a category displayed in navbar
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

    //determine which path to fetch photos from 
    //fyi - server/db is configured to filter photos by category based off of the route
    const path = state.categoryFilter ? `api/topics/photos/${state.categoryFilter}` : 'api/photos';

    //retrieve data for topics and photos from server, which queries the psql database
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
  }, [state.categoryFilter]); //reloads data when the user selects a new category from the navbar

  return { state, dispatch };
};