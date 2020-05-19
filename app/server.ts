import { serve } from 'https://deno.land/std@0.50.0/http/server.ts';

const PORT_NUM = 8000

const app = serve({ port: PORT_NUM });
console.log(`http://localhost:${PORT_NUM}`);

for await (const req of app) {
  req.respond({ body: 'Hello, world!!\n'});
}