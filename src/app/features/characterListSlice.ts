import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CharacterItemType } from '../../types/CharacterItemType';
import { ApolloError } from '@apollo/client';

export interface CharacterListState {
  characterList: CharacterItemType[],
  loading: boolean,
  error: string,
  next: string | null,
  prev: string | null,
  pages: number,
};

const initialState: CharacterListState = {
  characterList: [],
  loading: false,
  error: '',
  next: null,
  prev: null,
  pages: 0,
};

export const characterListSlice = createSlice({
  name: 'characterList',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<CharacterListState>) => {
      state.characterList = action.payload.characterList;
      state.loading = action.payload.loading;
      state.error = action.payload.error;
      state.next = action.payload.next;
      state.prev = action.payload.prev;
      state.pages = action.payload.pages;
    },
  },
});

export default characterListSlice.reducer;
export const { actions } = characterListSlice;
