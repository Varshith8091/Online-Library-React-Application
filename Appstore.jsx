import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice.jsx';

const Appstore = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default Appstore;
