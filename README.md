自治体のデジタル回覧板のサンプル（静的HTML）

## 構成

- ページ本体: `index.html`, `archive.html`, `archive/*.html`
- 共通パーツ: `partials/header.html`, `partials/footer.html`, `partials/sub_contact.html`
- 各ページ本文: `content/**/*.content.html`
- 読み込みスクリプト: `assets/js/include.js`

各ページは `data-*-path` 属性で読み込み先を指定し、`fetch` でヘッダ/フッタ/本文を差し込みます。

## 使い方

1. `partials/*.html` または `content/**/*.content.html` を編集
2. VSCode拡張 `Live Server` で `index.html` を開く
