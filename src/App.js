import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  // イベントを受け取りsetTextの引数に与える　入力文字がsetText更新関数に入りtextのステートが更新
  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  // []の値が更新されたときにsetOpenを再生成 [カラ]であれば最初に生成したものをずっと使う
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  // 4という値を持ったまま使い回される
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      {/* チェンジイベントでonChangeText関数を実行 */}
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      {/* クリックイベントでonClickOpen関数を実行 */}
      <button onClick={onClickOpen}>表示</button>
      {/* ChildAreaのopenという名前のpropsに｛open｝ステートを渡してフラグ表示を切り替え */}
      {/* onClickCloseという属性の値をChildAreaのpropsに渡す */}
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
