const dotenv = require("dotenv");
dotenv.config({
  path: ".env.development",
});

// ✅ Define a URL do banco explicitamente para o ambiente de teste
process.env.DATABASE_URL =
  "postgres://local_user:local_password@localhost:5432/local_db";

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: ".",
});

const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
});

module.exports = jestConfig;
