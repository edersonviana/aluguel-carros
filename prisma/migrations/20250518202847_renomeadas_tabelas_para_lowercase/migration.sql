/*
  Warnings:

  - You are about to drop the `Aluguel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Carro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pagamento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Aluguel" DROP CONSTRAINT "Aluguel_carroId_fkey";

-- DropForeignKey
ALTER TABLE "Aluguel" DROP CONSTRAINT "Aluguel_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Pagamento" DROP CONSTRAINT "Pagamento_aluguelId_fkey";

-- DropTable
DROP TABLE "Aluguel";

-- DropTable
DROP TABLE "Carro";

-- DropTable
DROP TABLE "Pagamento";

-- DropTable
DROP TABLE "Usuario";

-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "cnh" TEXT,
    "telefone" TEXT,
    "role" "Role" NOT NULL DEFAULT 'CLIENTE',

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carro" (
    "id" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "status" "CarroStatus" NOT NULL DEFAULT 'DISPONIVEL',

    CONSTRAINT "carro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aluguel" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "carroId" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "valorTotal" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "aluguel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagamento" (
    "id" TEXT NOT NULL,
    "aluguelId" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "formaPagamento" "FormaPagamento" NOT NULL,
    "status" "PagamentoStatus" NOT NULL DEFAULT 'PENDENTE',

    CONSTRAINT "pagamento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "carro_placa_key" ON "carro"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "pagamento_aluguelId_key" ON "pagamento"("aluguelId");

-- AddForeignKey
ALTER TABLE "aluguel" ADD CONSTRAINT "aluguel_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aluguel" ADD CONSTRAINT "aluguel_carroId_fkey" FOREIGN KEY ("carroId") REFERENCES "carro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamento" ADD CONSTRAINT "pagamento_aluguelId_fkey" FOREIGN KEY ("aluguelId") REFERENCES "aluguel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
