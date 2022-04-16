const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    _id: ID
    employeeName: String
    email: String
    password: String
  }
  type Ticket {
    _id: ID!
    firstName: String!
    lastName: String!
    visitReason: String!
    description: String
    complete: Boolean
    employeeID: Employee
  }

  type Auth {
    token: ID!
    employee: Employee
  }

  type Query {
    employees: [Employee]
    employee(employeeName: String!): Employee
    me: Employee
  }

  type Mutation {
    addEmployee(employeeName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
