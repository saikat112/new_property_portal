const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.property.createMany({
    data: [
      {
        title: "Luxury Villa",
        price: 500000,
        location: "Los Angeles",
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        title: "Modern Apartment",
        price: 250000,
        location: "New York",
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        title: "Cozy Cottage",
        price: 180000,
        location: "San Francisco",
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        title: "Beachfront Bungalow",
        price: 700000,
        location: "Miami",
        imageUrl: "https://via.placeholder.com/150",
      },
    ],
  });

  console.log("🌱 Demo properties inserted successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
