# instalado fastify - framework tipo express
## instalado cors do fastify
    - @fastify/cors
## Importar o fastfy para criar as rotas
    const app = Fastify()

# instalado typescript - 
    - npx tsc --init (iniciar o typescript)

## instalado tsx - para rodar node em typescript
- npm install -D tsx
    - npx tsx "nome do arquivo"


# instalar prisma - ORM para node
    - instalar o cliente do prisma
    - instalar extensão do prisma no vs code 
    - @prisma/client
    - npx prisma init datasource-provider SQLite

# Criar as tabelas no schema.prisma
## Executar o migrate
    - npx prima migrate dev

## Abrir prisma no navegador
    - npx prisma studio

## Importar o client do prisma e criar const
    - const prisma = new PrismaClient()
