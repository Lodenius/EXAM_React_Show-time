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
        shows.unshift({ id: id, ...action.payload.show }); // pusha in ny serie i listan
        return {
          ...state,
          shows: shows,
        };

      case "FINISHED_SHOW":
        return {
          ...state,
          watched: [...state.watched, action.payload],
        };

      case "MOVE_TO_WATCHED":
        const showToMove = state.shows.find((show) => show.id === action.payload.id);
        const updatedShows = state.shows.filter((show) => show.id !== action.payload.id);
        return {
          ...state,
          shows: updatedShows,
          watched: [...state.watched, showToMove],
        };

      case "UPDATE_PROGRESS":
        return {
          ...state,
          watched: [...state.watched, action.payload],
        };

      case "SET_SCORE":
        return {
          ...state,
          watched: [...state.watched, action.payload],
        };

      default:
        return state;
    }
  };

export default showReducer;