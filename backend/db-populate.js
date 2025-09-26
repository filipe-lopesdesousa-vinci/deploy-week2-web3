const { PrismaClient } = require('./generated/prisma/client');

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');
  const expenses = await prisma.expense.createMany({
    data: [
      { date: '2025-01-16T00:00:00Z', description: 'Example expense #1 from Alice', payer: 'Alice', amount: 25.5 },
      { date: '2025-01-15T00:00:00Z', description: 'Example expense #2 from Bob', payer: 'Bob', amount: 35 },
      { date: '2025-01-15T00:00:00Z', description: 'Example expense #3 from Alice', payer: 'Alice', amount: 2 },
    ],
  });
  console.log('after expenses')
}

main()
  .finally(async () => {
    console.log('Seeding finished.');
    await prisma.$disconnect();
    console.log('Disconnected from database.');
  })
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });