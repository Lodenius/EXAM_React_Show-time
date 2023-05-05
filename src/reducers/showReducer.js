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
          ...state.watched.map((finished) => finished.id)); // gör så det nya id's går efter det högsta id't i listan, så det inte ska bli kollition 
        let id = highestId + 1; // lägg till id
        shows.push({ id: id, ...action.payload.show }); // pusha in ny serie i listan
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
                  episodes: show.episodes + action.payload.episode // lägger till episodes
                };
              }
              return show; // Returnera show-objektet oförändrat om id't inte matchar id't på objektet som ändrades
            })
          };

        // case "FINISHED_SHOW":
        //   return {
        //     ...state,
        //     watched: [...state.watched, action.payload] 
        //   };

        case "MOVE_TO_WATCHED": // flyttar show till watched
           const showToMove = state.shows.find((show) => show.id === action.payload.id);
           const updatedShows = state.shows.filter((show) => show.id !== action.payload.id);
           return {
             ...state,
             shows: updatedShows,
             watched: [...state.watched, showToMove],
        };

        case "SET_SCORE":
          let changedScore = action.payload.show;
          let prop = action.payload.prop
          changedScore[prop] = action.payload.newVScore
          let indexOfScore = shows.findIndex((show) => show.id === changedScore.id);
          shows.splice(indexOfScore, 1, changedScore);
          return {
              ...state,
              shows: shows
          }

      default:
        return state;
    }
  };

export default showReducer;