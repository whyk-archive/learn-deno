interface Env { 
  get?(key: string): string | undefined;
  set?(key: string, value: string): void;
  toObject?(): {
      [index: string]: string;
  };
  APP_PORT?: number
}

const env: Env = Deno.env;

export const APP_PORT = env.APP_PORT || 8080