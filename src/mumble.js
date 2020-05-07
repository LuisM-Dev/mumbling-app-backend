const createArrayfromString = s => {
  return s.split("");
};

const createMumble = sArray => {
  return sArray.map((char, index) => {
    return char.toUpperCase() + char.repeat(index);
  });
};

const joinMumble = sArray => {
  return sArray.join("-");
};

const isValid = s => {
  return /^[a-zA-Z]+$/.test(s) ? "" : "Invalid Input";
};

const accum = s => {
  const input = isValid(s);
  return input
    ? input
    : joinMumble(createMumble(createArrayfromString(s.toLowerCase())));
};

module.exports = {
  createArrayfromString,
  createMumble,
  joinMumble,
  isValid,
  accum
};
