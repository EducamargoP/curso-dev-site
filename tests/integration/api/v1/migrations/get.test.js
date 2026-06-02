import database from "infra/database.js";

describe("API v1 status", () => {
  // roda antes de todos os testes deste bloco
  beforeAll(async () => {
    // limpa e insere uma migração de exemplo
    await database.Query("DELETE FROM pgmigrations;");
    await database.Query(
      "INSERT INTO pgmigrations (name, run_on) VALUES ('test-migration', NOW());",
    );
  });

  test("GET to /api/v1/status should return 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody.dependencies.database.version).toEqual("16.0");
  });
});
