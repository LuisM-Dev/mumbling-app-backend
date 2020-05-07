const request = require("supertest");
const app = require("../../src/app");

describe("test API", () => {
  test("should get mumbling", async () => {
    const response = await request(app)
      .post("/mumbling")
      .send({ string: "abcd" })
      .expect(200);
    expect(response.body.result).toBe("A-Bb-Ccc-Dddd");
  });

  test("should relay message", async () => {
    const response = await request(app)
      .get("/")
      .expect(200);
    expect(response.text).toBe("This is just for API calls");
  });
});
