[chrome.idle](https://developer.chrome.com/docs/extensions/reference/idle/) のテスト

## 使い方

```
npm install
npm run bulid
```

Chrome の拡張機能管理ページから、「パッケージ化されていない拡張機能を読み込む」で dist/webext-prod を読む。

拡張機能のアイコンをクリックすると、状態の変化のログが見られる。

```
2021-12-10T01:30:36.228Z: idle
2021-12-10T01:33:30.380Z: active
2021-12-10T01:41:18.701Z: idle
2021-12-10T01:50:19.156Z: locked
2021-12-10T02:03:37.397Z: active
2021-12-10T02:05:55.974Z: idle
2021-12-10T02:06:15.991Z: active
2021-12-10T02:07:17.040Z: idle
2021-12-10T02:07:23.045Z: active
```

PCの操作をせずにしばらくすると idle になる。
操作をすると active に変わる。
画面がパワーセーブで消えたりロックされると locked になる。
ロックを解除すると active に変わる。
