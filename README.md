# Yukima Games HP

## 開発の始め方

```shell
# pull
git clone git@github.com:kazukitash/kazukitash.github.io.git
cd kazukitash.github.io

# serve locally
make

# open http://localhost:4000
```

## Apple Silicon Macの場合

Dockerのコンテキストをarm64からx86_64に変更する。

```sh
limactl stop default
limactl start x86_64
docker context use lima-x86_64
```
