# Zenn RSS機能

## 目的

自分のZenn記事を取得して表示する

## 要求仕様

- 最新10件を取得する
- 作成日時とタイトルを取得して表示する
- クリックするとtarget=blankでZenn記事が開く
- GitHub ActionsでISRする。つまり、Staticで配信する

## 各パート（モジュール・クラス）の概要

### ZennArticles

Zenn記事をfetchしてきて表示するReactコンポーネント
サーバーサイドでインクリメンタルに定期的に更新する。
ユーザーにはstaticに配信する。

## 参考文献

- [Next.js で作ったサイトを GitHub Pages で公開する方法を爆速で丁寧に説明する #Node.js - Qiita](https://qiita.com/unreadabread/items/920420c24fc49cb3b392)
- [2023年8月版: Next.jsをGitHub ActionsでGitHub Pagesにデプロイする方法](https://zenn.dev/pino0701/articles/nextjs_github_pages)
