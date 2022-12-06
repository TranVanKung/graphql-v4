import _ from "lodash";
import userResolver from "./user";

const rootResolver = _.merge([userResolver]);

export default rootResolver;
