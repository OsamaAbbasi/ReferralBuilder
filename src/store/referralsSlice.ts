import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FormData} from '../interfaces/interfaces';

export interface ReferralState {
  referrals: FormData[];
}

const initialState: ReferralState = {
  referrals: [],
};

const referralsSlice = createSlice({
  name: 'referrals',
  initialState,
  reducers: {
    addReferral: (state, action: PayloadAction<FormData>) => {
      state.referrals.push(action.payload);
    },
  },
});

export const {addReferral} = referralsSlice.actions;
export default referralsSlice.reducer;
