const request = require("supertest");
const express = require("express");

const app = express();

app.get("/trees/:id", (req, res) => {
  const tree = { id: req.params.id, name: "Oak", age: 100 };
  res.status(200).json(tree);
});

describe("GET /trees/:id", () => {
  it("should return the details of a specific tree in JSON format with status code 200", async () => {
    const response = await request(app).get("/trees/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: "1", name: "Oak", age: 100 });
  });
});
