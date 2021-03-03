const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }
  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }
  enum PatchSize {
    SMALL
    LARGE
  }
  type Query {
    launches(pageSize: Int, after: String): LaunchConnection!
    launch(id: ID!): Launch
    me: User
  }
  type LaunchConnection {
    cursor: String!
    hasMore: Boolean!
    launches: [Launch]!
  }
  type Mutation {
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): String # login token
  }
  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }
  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String!
    profileImage: String
    trips: [Launch]!
  }

  type Mission {
    missionPatch(mission: String, size: PatchSize): String
  }
`;

module.exports = typeDefs;
