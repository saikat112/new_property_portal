const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.property.createMany({
    data: [
      {
        title: "Fortune Heights",
        developer: "Fortune Park Housing",
        type: "2, 3, 4 BHK",
        location: "Barasat, Kolkata",
        category: "newly_launched_property",
        minPrice: "₹37.0 L",
        maxPrice: "₹1.12 Cr",
        imageUrl: "https://dummyimage.com/150x100/000/fff"
      },
      {
        title: "Shree Heights",
        developer: "Dream Royally LLP",
        type: "2, 3 BHK",
        location: "Chandannagar, Hooghly",
        category: "newly_launched_property",
        minPrice: "₹44.2 L",
        maxPrice: "₹65.4 L",
        imageUrl: "https://dummyimage.com/150x100/007bff/fff"
      },
      {
        title: "Fortune Heights",
        developer: "Fortune Park Housing",
        type: "2, 3, 4 BHK",
        location: "Barasat, Kolkata",
        category: "newly_launched_property",
        minPrice: "₹37.0 L",
        maxPrice: "₹1.12 Cr",
        imageUrl: "https://dummyimage.com/150x100/000/fff"
      },
      {
        title: "Fortune Heights",
        developer: "Fortune Park Housing",
        type: "2, 3, 4 BHK",
        location: "Barasat, Kolkata",
        category: "newly_launched_property",
        minPrice: "₹37.0 L",
        maxPrice: "₹1.12 Cr",
        imageUrl: "https://dummyimage.com/150x100/000/fff"
      },
      {
        title: "Fortune Heights",
        developer: "Fortune Park Housing",
        type: "2, 3, 4 BHK",
        location: "Barasat, Kolkata",
        category: "newly_launched_property",
        minPrice: "₹37.0 L",
        maxPrice: "₹1.12 Cr",
        imageUrl: "https://dummyimage.com/150x100/000/fff"
      },
      {
        title: "Fortune Heights",
        developer: "Fortune Park Housing",
        type: "2, 3, 4 BHK",
        location: "Barasat, Kolkata",
        category: "newly_launched_property",
        minPrice: "₹37.0 L",
        maxPrice: "₹1.12 Cr",
        imageUrl: "https://dummyimage.com/150x100/000/fff"
      },
      {
        title: "Fortune Heights",
        developer: "Fortune Park Housing",
        type: "2, 3, 4 BHK",
        location: "Barasat, Kolkata",
        category: "newly_launched_property",
        minPrice: "₹37.0 L",
        maxPrice: "₹1.12 Cr",
        imageUrl: "https://dummyimage.com/150x100/000/fff"
      },
      {
        title: "Fortune Heights",
        developer: "Fortune Park Housing",
        type: "2, 3, 4 BHK",
        location: "Barasat, Kolkata",
        category: "newly_launched_property",
        minPrice: "₹37.0 L",
        maxPrice: "₹1.12 Cr",
        imageUrl: "https://dummyimage.com/150x100/000/fff"
      },
      {
        title: "Fortune Heights",
        developer: "Fortune Park Housing",
        type: "2, 3, 4 BHK",
        location: "Barasat, Kolkata",
        category: "hot_property",
        minPrice: "₹37.0 L",
        maxPrice: "₹1.12 Cr",
        imageUrl: "https://dummyimage.com/150x100/000/fff"
      },
      {
        title: "Shree Heights",
        developer: "Dream Royally LLP",
        type: "2, 3 BHK",
        location: "Chandannagar, Hooghly",
        category: "hot_property",
        minPrice: "₹44.2 L",
        maxPrice: "₹65.4 L",
        imageUrl: "https://dummyimage.com/150x100/007bff/fff"
      },
      {
        title: "Fortune Heights",
        developer: "Fortune Park Housing",
        type: "2, 3, 4 BHK",
        location: "Barasat, Kolkata",
        category: "hot_property",
        minPrice: "₹37.0 L",
        maxPrice: "₹1.12 Cr",
        imageUrl: "https://dummyimage.com/150x100/000/fff"
      },
      {
        title: "Fortune Heights",
        developer: "Fortune Park Housing",
        type: "2, 3, 4 BHK",
        location: "Barasat, Kolkata",
        category: "hot_property",
        minPrice: "₹37.0 L",
        maxPrice: "₹1.12 Cr",
        imageUrl: "https://dummyimage.com/150x100/000/fff"
      },
      {
        title: "Fortune Heights",
        developer: "Fortune Park Housing",
        type: "2, 3, 4 BHK",
        location: "Barasat, Kolkata",
        category: "hot_property",
        minPrice: "₹37.0 L",
        maxPrice: "₹1.12 Cr",
        imageUrl: "https://dummyimage.com/150x100/000/fff"
      },
      {
        title: "Fortune Heights",
        developer: "Fortune Park Housing",
        type: "2, 3, 4 BHK",
        location: "Barasat, Kolkata",
        category: "hot_property",
        minPrice: "₹37.0 L",
        maxPrice: "₹1.12 Cr",
        imageUrl: "https://dummyimage.com/150x100/000/fff"
      },
      {
        title: "Fortune Heights",
        developer: "Fortune Park Housing",
        type: "2, 3, 4 BHK",
        location: "Barasat, Kolkata",
        category: "hot_property",
        minPrice: "₹37.0 L",
        maxPrice: "₹1.12 Cr",
        imageUrl: "https://dummyimage.com/150x100/000/fff"
      },
      {
        title: "Fortune Heights",
        developer: "Fortune Park Housing",
        type: "2, 3, 4 BHK",
        location: "Barasat, Kolkata",
        category: "hot_property",
        minPrice: "₹37.0 L",
        maxPrice: "₹1.12 Cr",
        imageUrl: "https://dummyimage.com/150x100/000/fff"
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
