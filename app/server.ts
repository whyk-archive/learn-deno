import { serve } from 'https://deno.land/std@0.50.0/http/server.ts';
import { APP_PORT } from './utils/config.ts';


const app = serve({ port: APP_PORT });
console.log(`http://localhost:${APP_PORT}`);

for await (const req of app) {
  req.respond({ body: 'Hello, world!!\n'});
}