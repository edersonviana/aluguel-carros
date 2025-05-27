/*
  Warnings:

  - You are about to drop the column `aluguelId` on the `pagamento` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pagamentoId]` on the table `aluguel` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pagamentoId` to the `aluguel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "pagamento" DROP CONSTRAINT "pagamento_aluguelId_fkey";

-- DropIndex
DROP INDEX "pagamento_aluguelId_key";

-- AlterTable
ALTER TABLE "aluguel" ADD COLUMN     "pagamentoId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pagamento" DROP COLUMN "aluguelId";

-- CreateIndex
CREATE UNIQUE INDEX "aluguel_pagamentoId_key" ON "aluguel"("pagamentoId");

-- AddForeignKey
ALTER TABLE "aluguel" ADD CONSTRAINT "aluguel_pagamentoId_fkey" FOREIGN KEY ("pagamentoId") REFERENCES "pagamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
