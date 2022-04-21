const { AuthenticationError } = require('apollo-server-express');
const { User, Ticket } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    queue: async(parent,args,context) =>{
     const tickets = await Ticket.findAll() 
     return tickets
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addTicket: async(parent,{ticketData}, context)=> {
      return await Ticket.create(ticketData)
    },
  },
};

module.exports = resolvers;
