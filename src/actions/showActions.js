export const watchList = (shows) => ({
    type: "WATCH_LIST",
    payload: shows
});

export const addShow = (shows) => ({
    type: "ADD_SHOW",
    payload: shows
});

export const FinishedShow = (shows) => ({
    type: "FINISHED_SHOW",
    payload: shows
});

export const buyCandy = (candy) => ({
    type: "BUY_CANDY",
    payload: candy
});

export const removeCandy = (candy) => ({
    type: "REMOVE_CANDY",
    payload: candy
});