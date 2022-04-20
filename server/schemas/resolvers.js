const { AuthenticationError } = require('apollo-server-express');
const { User, Ticket } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    queue: async () => {
      return Ticket.find({complete: false});
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
  
  // addTicket: async (parent, { ticketData }) => {
  //     const addTicket = await Ticket.findOneAndUpdate(
  //       { $push: { Ticket: ticketData } },
  //       { new: true }
  //     );
  //     return addTicket;
  // },

  addTicket: async (parent, { ticketData }, context) => {
    if (context.ticket) {
      const ticket = await Ticket.create({
        ticketData,
      });

      await Ticket.findOneAndUpdate(
        { _id: context.ticket._id },
        { $push: { Ticket: ticket.ticketId } }
      );

      return ticket;
    }
  },

  removeTicket: async (parent, { ticketId }) => {
      const removeTicket = await Ticket.findOneAndUpdate(
        { ticketId },
        { $pull: { Ticket: { ticketId } } },
        { new: true }
      );
      return removeTicket;
  },

  addTicket: async (parent, { ticketData }, context) => {
    if (context.ticket) {
      const ticket = await Ticket.create({
        ticketData,
      });

      await Ticket.findOneAndUpdate(
        { _id: context.ticket._id },
        { $push: { Ticket: ticket.ticketId } }
      );

      return ticket;
    }
  },
}
};

module.exports = resolvers;
