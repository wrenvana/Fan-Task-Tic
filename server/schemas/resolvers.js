const { AuthenticationError } = require("apollo-server-express");
const { User, Item, Category, Order } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {},
};

module.exports = resolvers;
