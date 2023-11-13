import { CharacterItemType } from './CharacterItemType';

export interface CharactersFromServer {
  results: CharacterItemType[];
  info: {
      pages: number;
      next: string | null;
      prev: string | null;
  }
}
