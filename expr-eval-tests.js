// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by expr-eval.js.
import { name as packageName } from "meteor/ranux:expr-eval";

// Write your tests here!
// Here is an example.
Tinytest.add('expr-eval - example', function (test) {
  test.equal(packageName, "expr-eval");
});
