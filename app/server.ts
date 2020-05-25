import { serve } from 'https://deno.land/std@0.50.0/http/server.ts';
import { extractObjectValue } from 'https://github.com/windchime-yk/deno-util/raw/master/util.ts';
import { APP_PORT } from './utils/config.ts';

interface User {
  _id: string,
  name?: string,
  description?: string
}

const userList: User[] = [
  {
    _id: '293kfo23dkw',
    name: 'user name',
    description: 'えいえいえー'
  },
  {
    _id: 'ganfagaa3dw',
    name: 'user name2',
    description: 'おいおいおー'
  }
]

const app = serve({ port: APP_PORT });
console.log(`http://localhost:${APP_PORT}`);
console.log(extractObjectValue<User>(userList, 'description'));

for await (const req of app) {
  req.respond({ body: 'Hello, world!!\n'});
}