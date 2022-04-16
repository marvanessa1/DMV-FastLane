import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      employee {
        _id
        employeename
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addEmployee($employeename: String!, $email: String!, $password: String!) {
    addEmployee(employeename: $employeename, email: $email, password: $password) {
      token
      employee {
        _id
        employeename
      }
    }
  }
`;