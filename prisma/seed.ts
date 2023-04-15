import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.habit.deleteMany();

  await Promise.all([
    prisma.habit.create({
      data: {
        title: "Beber 2L de água",
        created_at: new Date("2023-01-10T00:00:00.000z"),
        weekDays: {
          create: [{ week_day: 1 }, { week_day: 2 }, { week_day: 3 }],
        },
      },
    }),

    prisma.habit.create({
      data: {
        title: "Exercitar",
        created_at: new Date("2023-01-10T00:00:00.000z"),
        weekDays: {
          create: [{ week_day: 3 }, { week_day: 4 }, { week_day: 5 }],
        },
      },
    }),

    prisma.habit.create({
      data: {
        title: "dormir 8h",
        created_at: new Date("2023-01-10T00:00:00.000z"),
        weekDays: {
          create: [
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
          ],
        },
      },
    }),
  ]);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
