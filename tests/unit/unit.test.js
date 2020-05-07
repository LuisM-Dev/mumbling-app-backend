const {
  createArrayfromString,
  createMumble,
  joinMumble,
  isValid,
  accum
} = require("../../src/mumble");

describe("test mumbling", () => {
  test("splitting string", () => {
    const actual = createArrayfromString("abcd");
    expect(actual).toEqual(["a", "b", "c", "d"]);
  });

  test("create mumble array", () => {
    const actual = createMumble(["a", "b", "c", "d"]);
    expect(actual).toEqual(["A", "Bb", "Ccc", "Dddd"]);
  });

  test("create mumble string", () => {
    const actual = joinMumble(["A", "Bb", "Ccc", "Dddd"]);
    expect(actual).toEqual("A-Bb-Ccc-Dddd");
  });

  test("create mumble", () => {
    const actual = accum("abcd");
    expect(actual).toEqual("A-Bb-Ccc-Dddd");
  });

  test("invalid Input", () => {
    const actual = isValid("123abcd");
    expect(actual).toEqual("Invalid Input");
  });

  test("invalid Input just numbers", () => {
    const actual = isValid("123");
    expect(actual).toEqual("Invalid Input");
  });

  test("invalid Input special characters", () => {
    const actual = isValid("@£?");
    expect(actual).toEqual("Invalid Input");
  });
});
