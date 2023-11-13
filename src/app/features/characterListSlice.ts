import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CharacterItemType } from '../../types/CharacterItemType';

export interface CharacterListState {
  characterList: CharacterItemType[],
  pages: number,
};

const initialState: CharacterListState = {
  characterList: [],
  pages: 0,
};

export const characterListSlice = createSlice({
  name: 'characterList',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<CharacterListState>) => {
      state.characterList = action.payload.characterList;
      state.pages = action.payload.pages;
    },
  },
});

export default characterListSlice.reducer;
export const { actions } = characterListSlice;
