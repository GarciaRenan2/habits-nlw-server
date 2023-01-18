instalado fastify - framework ??

instalado typescript - 
    - npx tsc --init (iniciar o typescript)

instalado tsx - para rodar node em typescript
    - npx tsx "nome do arquivo"


# Importar o fastfy para criar as rotas
    const app = Fastify()

instalar prisma - ORM para node
    - instalar o cliente do prisma
    - @prisma/client
    - npx prisma init datasource-provider SQLite

# Criar as tabelas no schema.prisma
# Executar o migrate
    - npx prima migrate dev

# Abrir prisma no navegador
    - npx prisma studio

# Importar o client do prisma e criar const
    - const prisma = new PrismaClient()

instalado cors do fastify
    - @fastify/cors