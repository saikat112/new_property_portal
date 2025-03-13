import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    console.log("✅ Requested Category:", category);

    let properties;
    if (category) {
      properties = await prisma.property.findMany({
        where: { category: category },
        select: {
          id: true,
          title: true,
          developer: true,
          type: true,
          location: true,
          minPrice: true,
          maxPrice: true,
          imageUrl: true,
        },
      });
    } else {
      properties = await prisma.property.findMany();
    }

    console.log("✅ Properties Found:", properties);
    return Response.json(properties);
  } catch (error) {
    console.error("🚨 Error fetching properties:", error.message);
    return Response.json({ error: "Failed to fetch properties", details: error.message }, { status: 500 });
  }
}
