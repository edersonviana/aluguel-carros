-- DropForeignKey
ALTER TABLE "aluguel" DROP CONSTRAINT "aluguel_carroId_fkey";

-- AddForeignKey
ALTER TABLE "aluguel" ADD CONSTRAINT "aluguel_carroId_fkey" FOREIGN KEY ("carroId") REFERENCES "carro"("id") ON DELETE CASCADE ON UPDATE CASCADE;
