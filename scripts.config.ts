import { DenonConfig } from "https://deno.land/x/denon@2.4.4/mod.ts";

const config: DenonConfig = {
  scripts: {
    server: {
      cmd: "deno run app/server.tsx",
      allow: ["read", "env", "net"],
      watch: true,
    },
    webview: {
      cmd: "deno run app/webview.ts",
      desc: "Run the deno-webview test",
      allow: ["env", "read", "write", "net", "plugin"],
      unstable: true,
      watch: true,
    },
  },
};

export default config;
