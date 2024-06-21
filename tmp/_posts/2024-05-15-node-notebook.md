---
layout: post
title: VSCodeのNotebookでNodeインタプリタを選択できるようにする
---

pythonインタプリタでnotebookが使えているのが前提。

kernelになる以下のnodeパッケージをインストールする。

```sh
npm i -g ijavascript
```

Terminalを再起動する。

```sh
ijsinstall
```

VSCodeを再起動する。

`Command Pallet` で `select notebook kernel` コマンドを選択し、`jupyter kernel` -> `JavaScript (Node.js)` を選択する。

![](/assets/images/posts/node-notebook-1.png)
![](/assets/images/posts/node-notebook-2.png)
![](/assets/images/posts/node-notebook-3.png)

現在アクティブなnode環境で実行される。

![](/assets/images/posts/node-notebook-4.png)


## 参考

- [visual studio code - Jupyter notebook on VsCode not accepting JavaScript - Stack Overflow](https://stackoverflow.com/questions/68305020/jupyter-notebook-on-vscode-not-accepting-javascript)
- [Installation](https://n-riesco.github.io/ijavascript/doc/install.md.html)
