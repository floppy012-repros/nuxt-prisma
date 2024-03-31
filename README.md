# Custom client directory `__dirname` error

See: [https://github.com/prisma/prisma/issues/22827](https://github.com/prisma/prisma/issues/22827)

## Using this repository

1. Install dependencies `npm install`
2. Build project `npm run build`
3. Run project `node .output/server/index.mjs`
4. Open [http://localhost:3000/test](http://localhost:3000/test)
5. Observe error in console

## Raw Reproduction

1. Install fresh version of Nuxt 3
2. Install Prisma
3. Run `npx prisma init --datasource-provider sqlite`
4. Set `output` to `client` in the generator section of `prisma/schema.prisma`
5. Add a model to `prisma/schema.prisma`
6. Create migration `npx prisma migrate dev --name init`
7. Use `PrismaClient` in a route (e.g. `return new PrismaClient().<model>.count({})`)
8. Build project `npm run build`
9. Start project `node .output/server/index.mjs`
10. Open your route and observer error in console

```
[nuxt] [request error] [unhandled] [500] __dirname is not defined in ES module scope
  at ./.output/server/chunks/routes/test.mjs:879:16  
  at ModuleJob.run (node:internal/modules/esm/module_job:218:25)  
  at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)  
  at async Object.handler (./.output/server/chunks/runtime.mjs:2805:19)  
  at async Server.toNodeHandle (./.output/server/chunks/runtime.mjs:3071:7)
```
