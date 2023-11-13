import { useQuery, gql, ApolloError } from '@apollo/client';
import { CharacterType } from '../types/CharacterType';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      location {
        name
      }
      origin {
        name
      }
    }
  }
`;

interface Query {
  data: {
    character: CharacterType,
  }
  loading: boolean,
  error: ApolloError | undefined,
  
}

export const useCharacter = (id: number): Query => {
  const { data, error, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    }
  });

  return {
    data,
    error,
    loading,
  };
};
