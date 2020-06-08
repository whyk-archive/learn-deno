import { createApp } from './utils/deps.ts'
import { APP_PORT } from './utils/config.ts';

const app = createApp();

app.handle('/', async (req) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      'content-type': 'text/plain',
    }),
    body: 'Hello, Deno!!'
  });
});

app.listen({port: APP_PORT});

console.log(`http://localhost:${APP_PORT}`);