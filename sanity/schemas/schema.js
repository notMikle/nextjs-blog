import createSchema from "part:@sanity/base/schema-creator";
import post from "./post";
import schemaTypes from "all:part:@sanity/base/schema-type";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([post]),
});
