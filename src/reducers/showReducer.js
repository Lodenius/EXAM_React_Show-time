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

        case "CHANGE_SCORE":
          return {
            ...state,
            shows: shows.map(show => {
              if (show.id === action.payload.id) {
                return {
                  ...show, 
                  score: Math.min(5, Math.max(0, show.score + action.payload.newScore))  // lägger till poäng och för så det inte kan bli minre än 0 eller högre än 5
                };
              }
              return show; // Returnera show-objektet oförändrat om id't inte matchar id't på objektet som ändrades
            })
          };

        // case "MINUS_SCORE":
        //   let removeScore = action.payload
        //   let removedIndex = shows.findIndex((show => show.id === removeScore.id))

      default:
        return state;
    }
  };

export default showReducer;