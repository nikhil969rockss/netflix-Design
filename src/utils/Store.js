import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import nowPlayingReducer from "./NowPlayingMoviesSlice";
import navbarReducer from "./NavbarSlice";
import movieBannerReducer from "./MovieBannerSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    nowPlayingMovie: nowPlayingReducer,
    navbar: navbarReducer,
    movieBanner : movieBannerReducer,
  },
});

export default appStore;
