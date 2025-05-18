-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENTE', 'ADMIN');

-- CreateEnum
CREATE TYPE "CarroStatus" AS ENUM ('DISPONIVEL', 'LOCADO', 'MANUTENCAO');

-- CreateEnum
CREATE TYPE "AluguelStatus" AS ENUM ('ATIVA', 'FINALIZADO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "FormaPagamento" AS ENUM ('CARTAO', 'PIX');

-- CreateEnum
CREATE TYPE "PagamentoStatus" AS ENUM ('PENDENTE', 'PAGO', 'CANCELADO');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "cnh" TEXT,
    "telefone" TEXT,
    "role" "Role" NOT NULL DEFAULT 'CLIENTE',

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carro" (
    "id" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "status" "CarroStatus" NOT NULL DEFAULT 'DISPONIVEL',

    CONSTRAINT "Carro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aluguel" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "carroId" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "valorTotal" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Aluguel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pagamento" (
    "id" TEXT NOT NULL,
    "aluguelId" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "formaPagamento" "FormaPagamento" NOT NULL,
    "status" "PagamentoStatus" NOT NULL DEFAULT 'PENDENTE',

    CONSTRAINT "Pagamento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Carro_placa_key" ON "Carro"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "Pagamento_aluguelId_key" ON "Pagamento"("aluguelId");

-- AddForeignKey
ALTER TABLE "Aluguel" ADD CONSTRAINT "Aluguel_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aluguel" ADD CONSTRAINT "Aluguel_carroId_fkey" FOREIGN KEY ("carroId") REFERENCES "Carro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pagamento" ADD CONSTRAINT "Pagamento_aluguelId_fkey" FOREIGN KEY ("aluguelId") REFERENCES "Aluguel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
