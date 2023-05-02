import { showStore } from "../store/showStore";

const showReducer = (state = showStore, action) => {
    let shows = [...state.shows];
    switch (action.type) {
        case "WATCH_LIST":
            return {
                ...state,
                shows: [...action.payload]}
        default:
            return state
    }
}
export default showReducer;