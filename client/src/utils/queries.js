import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query employee($employeename: String!) {
    employee(employeename: $employeename) {
      _id
      employeename
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      employeename
      email
    }
  }
`;