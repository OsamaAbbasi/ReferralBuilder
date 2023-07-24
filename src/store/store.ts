import {configureStore} from '@reduxjs/toolkit';
import referralsReducer from './referralsSlice';

const store = configureStore({
  reducer: {
    referrals: referralsReducer,
  },
});

export default store;
