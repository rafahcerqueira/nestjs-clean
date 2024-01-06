import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { randomUUID } from "node:crypto";
import { execSync } from "node:child_process";

const prisma = new PrismaClient();

function generateUniqueDataBaseURL(schemaId: string) {
  if (!process.env.DATABASE_URL)
    throw new Error("Please provider a DATABASE_URL enviroment variable");

  const url = new URL(process.env.DATABASE_URL);

  url.searchParams.set("schema", schemaId);

  return url.toString();
}

const schemaID = randomUUID();

beforeAll(async () => {
  const databaseURL = generateUniqueDataBaseURL(schemaID);

  process.env.DATABASE_URL = databaseURL;

  execSync("pnpm prisma migrate deploy");
});

afterAll(async () => {
  await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schemaID}" CASCADE`);
  await prisma.$disconnect();
});
