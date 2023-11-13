export interface CharacterItemType {
  id: number,
  name: string,
  image: string,
  status: string,
  species: string,
  location: {
    name: string,
  }
  origin: {
    name: string,
  }
}
