const { loadFeature, defineFeature } = require("jest-cucumber");
const localhost = require("../../src/production");

const feature = loadFeature("tests/e2e/mumbling.feature");

defineFeature(feature, test => {
  test("Mumbling localhost <String> to <Result>", ({ given, when, then }) => {
    let mumblingResult;
    given(/^a terminal/, () => {
      // console.log("opening terminal");
    });
    when(/^I execute mumble (.*)$/, value => {
      mumblingResult = localhost(value);
    });
    then(/^I will see (.*)$/, value => {
      expect(mumblingResult).toEqual(value);
    });
  });
});
