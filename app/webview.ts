import { WebView } from "https://deno.land/x/webview/mod.ts"; // utils/deps.tsに集約するとエラーが出るため個別import

const OS = Deno.build.os

const html = `
  <html>
  <body>
    <h1>Hello Deno!!</h1>
    <p>${OS}</p>
  </body>
  </html>
`;

await new WebView({
  title: "Local webview_deno example",
  url: `data:text/html,${encodeURIComponent(html)}`,
  height: 600,
  resizable: true,
  debug: true,
  frameless: false,
}).run();
