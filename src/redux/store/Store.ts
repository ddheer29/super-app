import {configureStore} from '@reduxjs/toolkit';
import UserReducer from '../slice/userSlice';

const store = configureStore({
  reducer: UserReducer,
});

export default store;
