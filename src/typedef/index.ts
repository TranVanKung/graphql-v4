import _ from "lodash";
import gql from "graphql-tag";
import userTypeDef from "./user";

const initialTypeDef = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

const rootTypeDef = [initialTypeDef, userTypeDef];

export default rootTypeDef;
