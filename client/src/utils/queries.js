import { gql } from '@apollo/client';

export const QUERY_QUEUE = gql`
  query queue{
    queue{
      _id
      service
      time
    }
  }
`;