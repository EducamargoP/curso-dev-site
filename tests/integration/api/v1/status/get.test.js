test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.dependencies.database.version).toEqual("16.14 (d163d05)");
  expect(responseBody.dependencies.database.max_connections).toEqual(901);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});

//POSTGRES_HOST=ep-falling-pine-aqq3zb9k-pooler.c-8.us-east-1.aws.neon.tech
//POSTGRES_PORT=5432,
//POSTGRES_USER=neondb_owner
//POSTGRES_DB=neondb
//POSTGRES_PASSWORD=npg_bUAvoDEH3TI9
