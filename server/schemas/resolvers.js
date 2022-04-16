const { AuthenticationError } = require('apollo-server-express');
const { Employee } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    employee: async () => {
      return Employees.find();
    },
    employee: async (parent, { employeeName }) => {
      return Employee.findOne({ employeeName });
    },
    me: async (parent, args, context) => {
      if (context.employee) {
        return Employee.findOne({ _id: context.employee._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addEmployee: async (parent, { employeeName, email, password }) => {
      const employee = await Employee.create({ employeeName, email, password });
      const token = signToken(employee);
      return { token, employee };
    },
    login: async (parent, { email, password }) => {
      const employee = await Employee.findOne({ email });

      if (!employee) {
        throw new AuthenticationError('No employee found with this email address');
      }

      const correctPw = await employee.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(employee);

      return { token, employee };
    }
  }
};

module.exports = resolvers;
