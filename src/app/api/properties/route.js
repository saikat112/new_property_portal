import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const properties = await prisma.property.findMany();
    return Response.json(properties);
  } catch (error) {
    return Response.json({ error: "Failed to fetch properties" }, { status: 500 });
  }
}
