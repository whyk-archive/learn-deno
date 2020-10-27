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

### Denonのインストール
著名なDenoの開発モジュール。  
サードパーティモジュールであり、DenoにおけるNodemonを目指したもの。

``` bash
deno install -qAf --unstable https://deno.land/x/denon/denon.ts
``` 

### コードの起動
``` bash
denon server
denon webview
```
