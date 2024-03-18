import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import userReducer  from "../frature/user/userSlice";
import movieReducer from "../frature/movie/movieSlice"

export default configureStore({
    reducer: {
      user: userReducer,
      movie: movieReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }),
  });