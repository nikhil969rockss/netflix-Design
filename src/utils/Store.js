import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import nowPlayingReducer from "./NowPlayingMoviesSlice";
import navbarReducer from "./NavbarSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    nowPlayingMovie: nowPlayingReducer,
    navbar: navbarReducer,
  },
});

export default appStore;
