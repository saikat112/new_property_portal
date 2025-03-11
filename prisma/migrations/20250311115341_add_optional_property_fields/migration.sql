/*
  Warnings:

  - You are about to drop the column `price` on the `Property` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "price",
ADD COLUMN     "developer" TEXT,
ADD COLUMN     "maxPrice" TEXT,
ADD COLUMN     "minPrice" TEXT,
ADD COLUMN     "type" TEXT;
