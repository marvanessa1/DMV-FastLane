import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_TICKET = gql`
  mutation addTicket($ticketData: TicketInfo!) {
    addTicket(ticketData: $ticketData) {
     _id
    }
  }
`;

export const REMOVE_TICKET = gql`
  mutation removeTicket($ticketId: ID!) {
    removeTicket(ticketId: $ticketId) {
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

