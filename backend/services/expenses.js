const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

// Remove the disconnect wrapper for now
function getAllExpenses() {
  return prisma.expense.findMany();
}

function addExpense(expense) {
  return prisma.expense.create({ data: expense });
}

const INITIAL_DATA = [
  { date: '2025-01-16T00:00:00Z', description: 'Example expense #1 from Alice', payer: 'Alice', amount: 25.5 },
  { date: '2025-01-15T00:00:00Z', description: 'Example expense #2 from Bob', payer: 'Bob', amount: 35 },
  { date: '2025-01-15T00:00:00Z', description: 'Example expense #3 from Alice', payer: 'Alice', amount: 2 },
];

async function resetExpenses() {
  await prisma.expense.deleteMany({});
  await prisma.expense.createMany({ data: INITIAL_DATA });
  return prisma.expense.findMany();
}

module.exports = {
  getAllExpenses,
  addExpense,
  resetExpenses,
};