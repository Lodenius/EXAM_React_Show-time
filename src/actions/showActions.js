export const watchList = (shows) => ({
    type: "WATCH_LIST",
    payload: shows
});

export const addShow = (added) => ({
    type: "ADD_SHOW",
    payload: { show: added}
});

export const finishedShow = (finished) => ({
    type: "FINISHED_SHOW",
    payload: { watched: finished }
});

export const moveToWatched = (id) => ({
    type: "MOVE_TO_WATCHED",
    payload: { id },
  });