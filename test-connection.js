// Teste de conexão com o banco
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

async function testConnection() {
  try {
    console.log("🔍 Testando conexão com o banco...");
    console.log("DATABASE_URL:", process.env.DATABASE_URL?.replace(/\/\/.*:.*@/, "//***:***@"));
    
    await prisma.$connect();
    console.log("✅ Conexão bem-sucedida!");
    
    // Teste simples
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log("✅ Teste de query bem-sucedido:", result);
    
  } catch (error) {
    console.error("❌ Erro de conexão:");
    console.error("Código:", error.code);
    console.error("Mensagem:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();