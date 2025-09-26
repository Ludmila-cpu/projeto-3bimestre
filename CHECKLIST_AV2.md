# 📋 CHECKLIST DE ENTREGA - AV2

## ✅ SCHEMA & RELACIONAMENTOS (2,0 pontos)

### ✅ Modelos implementados:
- [x] **User**: com relacionamento 1-1 para Store
- [x] **Store**: pertence a User (userId único) e tem vários Products
- [x] **Product**: pertence a Store com preço Decimal(10,2)

### ✅ Relacionamentos funcionando:
- [x] **1-1 User → Store**: `userId @unique` no Store
- [x] **1-N Store → Product**: array `products Product[]` no Store
- [x] **Cascade deletes**: Store deletada remove Products

---

## ✅ CRUD COMPLETO (4,0 pontos)

### ✅ STORES - Todas as operações:
- [x] **POST /stores** - Criar loja
- [x] **GET /stores** - Listar todas as lojas  
- [x] **GET /stores/:id** - Buscar loja específica
- [x] **PUT /stores/:id** - Atualizar loja
- [x] **DELETE /stores/:id** - Deletar loja

### ✅ PRODUCTS - Todas as operações:
- [x] **POST /products** - Criar produto
- [x] **GET /products** - Listar todos os produtos
- [x] **GET /products/:id** - Buscar produto específico  
- [x] **PUT /products/:id** - Atualizar produto
- [x] **DELETE /products/:id** - Deletar produto

---

## ✅ CONSULTAS COM INCLUDE (1,5 pontos)

### ✅ Relacionamentos incluídos:
- [x] **GET /stores/:id** retorna: `{ user: true, products: true }`
- [x] **GET /products** retorna: `{ store: { include: { user: true } } }`
- [x] Todas as consultas incluem dados relacionados

---

## ✅ ORGANIZAÇÃO & BOAS PRÁTICAS (1,5 pontos)

### ✅ Código limpo:
- [x] **Nomes claros**: rotas organizadas por seções
- [x] **Tratamento de erros**: try/catch em todas as rotas
- [x] **Status codes corretos**: 201, 200, 404, 400, 204
- [x] **Validação**: P2025 (não encontrado), P2002 (duplicado)

---

# 🚀 COMANDOS PARA ALWAYSDATA

## 1. Configure seu .env (copie de .env.example):
```bash
DATABASE_URL="mysql://SEU_USER:SUA_SENHA@mysql-SEU_USER.alwaysdata.net/SEU_BANCO"
```

## 2. Aplique o schema no AlwaysData:
```bash
npx prisma db push
```

## 3. Inicie o servidor:
```bash 
npm run dev
```

---

# 📝 TESTE PRÁTICO

## 1. Criar um usuário:
```bash
POST /usuarios
{
  "name": "João Silva",
  "email": "joao@email.com", 
  "password": "123456"
}
```

## 2. Criar uma loja para o usuário:
```bash
POST /stores
{
  "name": "Loja do João",
  "userId": 1
}
```

## 3. Criar produtos na loja:
```bash
POST /products
{
  "name": "Smartphone",
  "price": 899.99,
  "storeId": 1
}
```

## 4. Testar relacionamentos:
```bash
# Ver loja com dono e produtos
GET /stores/1

# Ver produtos com loja e dono
GET /products
```

## 5. Testar PUT e DELETE:
```bash
# Atualizar loja
PUT /stores/1
{"name": "Loja Premium do João"}

# Atualizar produto  
PUT /products/1
{"name": "iPhone 15", "price": 999.99}

# Deletar produto
DELETE /products/1

# Deletar loja (remove todos os produtos)
DELETE /stores/1
```

---

## ✅ **STATUS: PROJETO COMPLETO E PRONTO PARA ENTREGA!**

**Pontuação esperada: 9,0/10,0** 🎯

Todos os requisitos obrigatórios foram implementados corretamente.