const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    orders: [Order]
  }

    type Auth {
    token: ID!
    user: User
  }

  type Category {
    _id: ID!
    name: String!
  }

  type Product {
    _id: ID!
    name: String!
    description: String!
    image: String!
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID!
    purchaseDate: String!
    products: [Product]
  }

  type Checkout {
    session: ID!
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    updateUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    updateItem(
      name: String!
      image_file: String!
      current_stock: Int
      cost: Int
      sales_price: Int
      order_link: String!
    )
  }
`;

module.exports = typeDefs;
