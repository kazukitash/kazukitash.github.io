---
layout: post
title: ImageMagickに関するChips
---

色々なImageMagickのコードサンプル

## サイズを合わせて合成

```sh
base=base
overlay=overlay
convert -resize $(identify -format "%wx%h" ${base}.jpg)! ${overlay}.png ${overlay}_resized.png
composite -gravity center ${overlay}_resized.png ${base}.jpg ${base}_overlayed.jpg
```

## フォルダ内の画像をタイル状に配置

```sh
montage inputs/*.jpg -geometry +0+0 -tile 5x21 output.jpg
```
