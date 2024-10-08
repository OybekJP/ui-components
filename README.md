# Buttonコンポーネントの実装とテスト
このプロジェクトでは、ReactとTypeScriptを使用してカスタムボタンコンポーネントを実装しました。このボタンコンポーネントは、さまざまなスタイルや機能を持つことができ、使用する際の柔軟性を提供します。また、Emotionを使用してスタイリングを行い、Jestを使用してテストを作成しました。

こちらからliveで確認できます：https://ui-components-oybek.netlify.app/

## 結果のスクショ
<img width="807" alt="image" src="https://github.com/user-attachments/assets/a86f2bc4-7e62-473b-bce1-08af4abb0865">

## 使用技術
- React: UIライブラリ
- TypeScript: 型安全なJavaScript
- Jest: テスティングフレームワーク
- Emotion: CSS-in-JSライブラリ
- Netlifyを利用して公開

## 特徴
- バリアントのサポート: ボタンはprimary、secondary、tertiaryのスタイルを持つことができます。
- アイコンの位置: ボタンにはアイコンを左または右に配置することができます。
- ローディング状態: ボタンがローディング中は、テキストが透明になり、スピナーが表示されます。
- リンクボタン: as="a"プロパティを使用することで、リンクとしてレンダリングできます。
- 無効状態: ボタンが無効の時には、スタイルが変わります。

## テストの実行
テストは以下のコマンドで実行できます。
```
npx jest
```
テストケースがすべてパスしたことを示すスクリーンショットを以下に示します。
<img width="525" alt="スクリーンショット 2024-10-04 2 17 08" src="https://github.com/user-attachments/assets/2aa74dcf-c560-4d56-aee4-b3363844c513">

