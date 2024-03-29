import { useReducer } from 'react';

export const useFavourites = (defaultState) => {

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
    }
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  return {state, dispatch};
};