const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Ticket {
    ticketId: ID!
    firstName: String!
    lastName: String!
    service: String!
    time: Int
    description: String
    complete: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }

  input TicketInfo {
    ticketId: String
    firstName: String!
    lastName: String!
    service: String!
    time: Int
    description: String
    complete: Boolean
  }

  type Query {
    queue: [Ticket]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTicket(ticketData: TicketInfo!): Ticket
    removeTicket(ticketId: ID!): Ticket
  }
`;

module.exports = typeDefs;
