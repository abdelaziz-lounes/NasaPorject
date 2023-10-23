const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  test("it should respond with 200 success", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
describe("Test POST /launch", () => {
  const launchData = {
    mission: "DZ explore",
    rocket: "DZ E1",
    launchDate: new Date("01/12/2025"),
    target: "kepler-200 b",
  };

  const invalidDateLaunchData = {
    mission: "DZ explore",
    rocket: "DZ E1",
    launchDate: "caw",
    target: "kepler-200 b",
  };

  const launchDataWithoutDate = {
    mission: "DZ explore",
    rocket: "DZ E1",
    target: "kepler-200 b",
  };

  test("it should respond with 201 created", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchData)
      .expect("Content-Type", /json/)
      .expect(201);

    const requestDate = new Date(launchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();

    expect(requestDate).toBe(responseDate);
    expect(response.body).toMatchObject(launchDataWithoutDate);
  });

  test("it should check missing property", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithoutDate)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "missing required launch property",
    });
  });

  test("it should catch invalid dates", async () => {
    const response = await request(app)
      .post("/launches")
      .send(invalidDateLaunchData)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "invalid date format",
    });
  });
});
