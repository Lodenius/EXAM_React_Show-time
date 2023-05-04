import { showStore } from "../store/showStore";

const showReducer = (state = showStore, action) => {
let shows = [...state.shows]
    switch (action.type) {

      case "WATCH_LIST":
        return {
          ...state,
          shows: [...action.payload],
        };

      case "ADD_SHOW":
        let id = state.shows.length + 1; // lägg till id
        shows.push({ id: id, ...action.payload.show }); // pusha in ny serie i listan
        return {
          ...state,
          shows: shows,
        };

      case "FINISHED_SHOW":
        return {
          ...state,
          watched: [...state.watched, action.payload],
        };

      case "ADD_EPISODE":
        return {
          ...state,
          shows: shows.map(show => {
            if (show.id === action.payload.id) {
              return {
                ...show, episodes: show.episodes + action.payload.episode
              };
            }
            return {
              ...show, episodes: show.episodes + 1
            };
          })
        };

      case "MOVE_TO_WATCHED":
        const showToMove = state.shows.find((show) => show.id === action.payload.id);
        const updatedShows = state.shows.filter((show) => show.id !== action.payload.id);
        return {
          ...state,
          shows: updatedShows,
          watched: [...state.watched, showToMove],
        };

      default:
        return state;
    }
  };

export default showReducer;