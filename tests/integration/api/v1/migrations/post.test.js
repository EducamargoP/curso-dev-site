import database from "infra/database.js";

test("POST /api/v1/migrations should create migration", async () => {
  const rows = await database.Query("SELECT * FROM pgmigrations;");
});

test("POST to /api/v1/migrations should return 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response1.status).toBe(200);

  const response1Body = await response1.json();
  console.log(response1Body);

  expect(Array.isArray(response1Body)).toBe(true);

  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response2.status).toBe(200);

  const response2Body = await response2.json();
  console.log(response2Body);

  expect(Array.isArray(response2Body)).toBe(true);
});
