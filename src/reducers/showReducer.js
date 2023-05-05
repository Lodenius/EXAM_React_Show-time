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
        const highestId = Math.max(
          ...state.shows.map((show) => show.id), 
          ...state.watched.map((finished) => finished.id));
        let id = highestId + 1;
        shows.push({ id: id, ...action.payload.show });
        return {
          ...state,
          shows: shows,
        };

        case "ADD_EPISODE":
          return {
            ...state,
            shows: shows.map(show => {
              if (show.id === action.payload.id) {
                return {
                  ...show, 
                  episodes: show.episodes + action.payload.episode
                };
              }
              return show;
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

        case "CHANGE_SCORE":
          return {
            ...state,
            shows: shows.map(show => {
              if (show.id === action.payload.id) {
                return {
                  ...show, 
                  score: Math.min(5, Math.max(0, show.score + action.payload.newScore))
                };
              }
              return show;
            })
          };

      default:
        return state;
    }
  };

export default showReducer;