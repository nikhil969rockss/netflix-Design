import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import nowPlayingReducer from "./NowPlayingMoviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    nowPlayingMovie: nowPlayingReducer,
  },
});

export default appStore;
