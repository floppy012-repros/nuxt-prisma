import { PrismaClient } from '~/prisma/client'

export default defineEventHandler((event) => {
  const db = new PrismaClient();
  return db.test.count({});
});
