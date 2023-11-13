import { useQuery, gql, ApolloError } from '@apollo/client';
import { CharactersFromServer } from '../types/CharactersFromServer';

const GET_CHARACTERS = gql`
  query GetCharacters(
    $page: Int!,
    $name: String,
    $status: String,
    $species: String,
    $type: String,
  ) {
    characters(
      page: $page,
      filter: {
        name: $name,
        status: $status,
        species: $species,
        type: $type,
      }
    ) {
      info {
        pages
        next
        prev
      }
      results {
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
  }
`;

interface Query {
  data: { characters: CharactersFromServer } | undefined;
  loading: boolean;
  error: ApolloError | undefined;
}

export const useCharacters = (page = 1, filters = {}): Query => {
  const { data, loading, error } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
      ...filters
    }
  });

  return {
    data,
    loading,
    error,
  };
};
