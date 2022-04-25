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

export const QUERY_TICKET = gql`
  query ticket($ticketId: ID!){
    ticket(ticketId: $ticketId){
      _id
      firstName
      lastName
      service
      description
      complete
      time
    }
  }
`;