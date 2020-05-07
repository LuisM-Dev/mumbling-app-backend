const { accum } = require("./mumble");

const args = () => {
  return process.argv.slice(2)[0];
};

const localhost = argv => {
  const result = accum(argv);
  console.log(result);
  return result;
};

// localhost(args());

module.exports = localhost;
