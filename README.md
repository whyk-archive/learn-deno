# learn-deno
JavaScript/TypeScriptランタイム『Deno』を試す

## Denoとは？
Node.jsの作者が、Node.jsでの反省点を踏まえて制作したもう一つのJavaScriptランタイム。最初からTypeScriptに対応しており、Deno本体がコンパイルしてくれる。  
セキュリティも重視しており、最初からローカルファイルなどにフルアクセスできるNode.jsと違い、フラグでアクセス許可を書かないと動作しないようになっている。  
2020年5月13日に、v1.0.0がリリースされた。

## VS Code拡張機能
[Deno](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)

## サンプルコードの起動方法
### Denoのインストール
``` bash
# macOS
brew install deno

# Windows
scoop install deno
```

### コードの起動
``` bash
deno run --allow-net app/server.ts
```
`--allow-net`は、ネットワークアクセスの許可を意味する。これを書かないと、以下のエラーメッセージが出力される。
``` bash
error: Uncaught PermissionDenied: network access to "0.0.0.0:8000", run again with the --allow-net flag
```