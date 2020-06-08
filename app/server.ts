import { serve } from './utils/deps.ts'
import { APP_PORT } from './utils/config.ts';

const app = serve({ port: APP_PORT });
console.log(`http://localhost:${APP_PORT}`);

for await (const req of app) {
  req.respond({ body: 'Hello, world!!\n'});
}