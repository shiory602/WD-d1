# React
> UIのパーツ（構成部品）を作るためのJavaScriptのフレームワーク
> フレームワークとは、WebサイトやWebサービスなどを作るときに、よく使う機能を提供するソフトウェア
### 特徴
- HTMLタグを埋め込むことが出来る
- 仮想DOMによる高速処理で他のフレームワークより早い
- コンポーネントを定義することで簡略してHTMLの要素に様々な機能を付けることが可能になる。
webアプリケーションなどでは本来アプリの画面を更新する場合、アプリ全体を更新する必要があるが、React.jsではSPA（シングルページアプリケーション）として動かせるアプリを作ることができることによりコンテンツの一部分だけを更新することが可能。
Reactで作られたアプリには、Facebook, Instagram, Skypeなどがある。
### Web開発の最新化
- モジュール化
カプセル化(Encapsulated)することで機能をひとまとまりにする
- 宣言(state)を管理しやすい
DOMを簡単に操作できる
- 効率化(Efficient)
DOM操作はjQueryよりも効率的になる
### React vs Angular
Angular
フレームワークであり完全なソリューション
- React
ライブラリでありビューのレンダリングとビューの確認のみを処理する
他のAPIを使う必要がある
## 描画の仕方
### 画面描画
ブラウザはDOM(Document Object Model)を使ってHTMLという文書（ドキュメント）を画面に描画するが、DOMを直接変更して再描画するのは複雑な処理となる。
### 仮想DOM(Virtual DOM)
ブラウザのDOMの状態をJavaScriptのオブジェクトとして管理することでブラウザに負荷をかけずに効率の良い再描画（Rendering）をするようにする。
**Reactのコンポーネント = 「状態を持つUI」**
### 差分描画
Reactを使うことで仮想DOMで差分のみを描画する
実際のDOMには関連する箇所だけが再描画される



## Reactの使い方
実際にReactを使うための環境構築の方法としてcreate-react-appがある。
### create-react-app
下記を順番にインストール
1. Instal Homebrew
2. Instal nodebrew
3. Instal node
4. nodeの環境パスを通す(ターミナルの再起動を忘れずに)
### 起動
[オプション２：ローカル環境](https://ja.reactjs.org/tutorial/tutorial.html)
[Getting Started](https://create-react-app.dev/docs/getting-started/)
1. ターミナル上でReactを使いたいファイルを開く
2. `npx create-react-app ファイル名`でエンター
3. cd ファイル名で作成したファイルに移動
4. npm start

### bootstrapのインストール
[npm](https://getbootstrap.com/docs/5.0/getting-started/download/#package-managers)
```
npm i bootstrap
```


## ファイルの種類
- src
    - 開発用のファイルが格納される
    - ReactコンポーネントのJSXファイルなどはここに置く
- public
    - 静的ファイルが格納される
    - htmlファイルや画像ファイルなど
- build
    - 本番用ファイル
    - npm run buildコマンドで生成される

### インストール後にReactを使う
- npm start
    - ローカルサーバーを起動してReactアプリを確認できる
    - ホットリロード（保存で自動更新）に対応
- npm run build
    - 本番用ファイルを生成してbuildディレクトリに出力
    - srcとpublicのファイルを１つにまとめる（バンドル）
- npm run eject: 基本使わない
    - BabelやWebpackの設定を変えたいときに使う

## Sandbox
[Sandboxで簡単にReact操作](https://codesandbox.io/)

***

# JSX
- JavaScriptの拡張言語 ≠ テンプレート言語（vue.js）
- HTMLのマークアップを記述 + JavaScriptの構文が使える
- JSXは最終的にReact要素を生成する
> 使うのにはBabelが必要

## Why to use JSX?
> ReactはReact.createElementで要素を生成するが、構文がわかりにくい。JSXをすることで勝手にコンパイルされる。
> ２つの構文は同じ結果となる

- JSXは`-`を認識しないのでキャメルケースで記述する
- `{}`内で変数を扱える（JSでいう`${}`）
- 文法エラーが起きないよう必ず閉じタグ`/>`が必要
### Without JSX
```js
React.createElement(
    'button',
    {className: 'btn-blue'},
    'Click me!'
)
```
### With JSX
```js
<button className={'btn-blue'}>
    Click me!
</button>
```

# Component
JSXを返す関数をコンポーネントと呼ぶ
　コンポーネントには**Class Component**と**Functional Component**がある
### コンポーネントは分ける
- １ファイル＝１コンポーネントにすべし
- なぜコンポーネントを分けるのか
    - 責務を明確にする（なんのためのパーツか）
    - 大規模アプリでも管理しやすくする
    - 再利用する

## class component
JavaScriptクラスで書かれたコンポーネント
```js
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}
```
### class componentを使う理由
（React 16.8以前の理由）
1. コンポーネントのなかでオブジェクトの宣言をしたい時
2. コンポーネントのなかでライフサイクルを使う時
3. コンポーネントの中で即座に更新したい時（ライフサイクル）
**現在はhooksがあるのでファンクションコンポーネントでもライフサイクルとstateが使える。**
```jsx
class About extends React.Component {
    // Initializing
    state = {
        name: "Alice"
    };
    // using data in UI
    render() {
        <p>Name is {this.state.name}</p>
    }
}
```
クラスコンポーネントの中で`this`を使った場合、`this`はクラスを指す。

## functional component
Layoutをするのにオススメのコンポーネント
JavaScript関数で書かれたコンポーネントでアロー関数も使える。ライフサイクルは使えない。
別名：Stateless component
```js
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}
```
### setState
functional componentの中では`this.state.name`のように変更はできない。
```js
updateNameStudent = () => {
    this.setState({
        name: "Dodo"
    })
}
```

# JavaScriptのモジュール機能
- プログラムをモジュールという単位に分割する
- 原則は１ファイル＝１モジュール
- 必要な時に必要なモジュールのみ読み込む

```js
import Article from "./components/Article";

function App() {
    return (
        <Article
        title={'タイトル'}
        content={'中身'}
        />
    );
}
```

## default export
名前なしエクスポート
```js
// アロー関数のdefault export
const Title = (props) => {
    return <h2>{props.title}</h2>
};
export default Title;

// 名前付き関数のdefault export
export default function Title(props) {
    return <h2>{props.title}</h2>
}
```
推奨されるexport方法
１ファイル＝１export
一度宣言したアロー関数をdefault export
名前付き関数宣言と同時にdefault export

## default import
名前なしimport
```js
// Article.jsx(export元)
const Article = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
};
export default Article;

// App.jsx(imiport先)
import Article from "./components/Article";
function App() {
    return (
        <Article
        title={'タイトル'}
        content={'コンテント'}
        />
    )
}
```
- default exportしたモジュールをそのまま読み込む
- importモジュール名from'ファイルパス'

## 名前付きexport
```js
// helper.js 便利な関数を集めたファイル
export const addTax = (price) => {
    return Math.floor(price *1.1)
}
export const getWild = () => {
    console.log('Get wild and touch')
}

// index.js
export {default as Article} from './Aricle'
export {default as Content} from './Content'
export {default as Title} from './Title'
```
defaultという名前のモジュールをTitleという名前でexport
- １ファイルから復習モジュールをexportしたい時
- Reactではエントリポイント（各コンポーネントを読み込む場所をindex.jsにまとめる）でよく使う
- エントリポイントでは別名exportも併用する

## 名前付きimport
```js
import {Content, Title} from "./index";
const Article = (props) => {
    return (
        <Article
            title={'タイトル'}
            content={'コンテント'}
        />
    )
}
```
- １ファイルから複数モジュールを読み込む
- エントリポイントから複数コンポーネントを読み込む

## Component Hierarchy(階層構造)
1. JSXは必ず階層構造になり、最上位コンポーネントは並列にできない。`return`で返せるのは１つのコンポーネントのみ。
```js
// Error
return (
    <p>Hello World!</p>
    <p>How are you?</p>
)
```
2. JSXの特殊タグである`React.Fragment`で囲むとHTMLタグと同じように記述できる。
```js
import React, { Fragment } from "react";
// OK
return (
    <React.Fragment>
        <p>Hello World!</p>
        <p>How are you?</p>
    </React.Fragment>
)
```
3. `React.Fragment`は省略可能
```js
// OK
return (
    <>
        <p>Hello World!</p>
        <p>How are you?</p>
    </>
)
```
**最上位タグが１つだけだった場合は必要ない！**


***

# Props
It is an object with data that is passed between components
全てのデータタイプを持つ
Reactは一方通行で親から子にデータがいく
```js
// child comp
function Welcome(props) {
    return <h1>Hello, {props.name}.</h1>
}
// parent comp
function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Alice" />
            <Welcome name="Eddy" />
        </div>
    );
}
// <h1>Hello, Sara.</h1>
// <h1>Hello, Alice.</h1>
// <h1>Hello, Eddy.</h1>
```
## Props in functional component
String以外では常に`{}`が必要
```js
// child comp
const Welcome = props => {
    return (
        <div>
            Hello, {props.name}.
        </div>
    )
    name="Sara"
}
```

## binding（結ぶ・くくりつける）
bindメソッドは、定義された関数に対して、**this**を代入できるメソッドで、その名の通り関数などをbind（紐づけ）することができる。
JavaScriptでは、関数内のthisは関数自体を指し、そのthisに値を設定することで、関数のプロパティ（関数に関する情報）を設定できる。



***
# Lifecycle
Methods that exist in react to execute function at the right timing of a react component life.
なんども実行されることがあるのでそれが正常なタイミングに起きるようにする。
[ライフサイクル図](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## コンポーネントを作る ~ Mounting ~
constructor
↓
getDerivedStateFromProps
↓
componentWillMount
↓
render
↓
React updates DOM and refs
↓
componentDidMount

## 更新 ~ Updating ~
**New Props**
↓
componentWillReceiveProps
↓
shouldComponentUpdate
↓
componentWillUpdate()
↓
render
↓
getSnapshotBeforeUpdate
↓
React updates DOM and refs
↓
componentDidUpdate

**setState()**
↓
componentWillReceiveProps
↓
shouldComponentUpdate
↓
componentWillUpdate()
↓
render
↓
getSnapshotBeforeUpdate
↓
React updates DOM and refs
↓
componentDidUpdate

## 消滅 ~ UnMounting ~
componentWillUnmount



### componentWillMount
レンダーされる前
### componendDidMount
レンダーされた直後
### componentWillReceiveProps
componentが新しいpropsを受け取ったとき
### shouldComponentUpdate
レンダーの前、新しいpropsかstateを受け取った後
### componentWillUpdate
レンダーの前、新しいpropsかstateを受け取った後
### componentDidUpdate
componentがDOMにアップデートされた後
### componentWillUnmount
componentがDOMから消える前

***

# React Hooks
> React 16.8(2019年2月9日)に追加された
> クラスを書かずにstateや他のReactの機能を使うことができる

## Syntax
コンポーネントのトップで使うこと
- count: stateの名前
- seCount: setState()の代わり
```js
import React, { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0); // 0 はデフォルトの値

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount({ count: count + 1 })}>
                Click me
            </button>
        </div>
    )
}
```

Classの時
```js
class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        );
    }
}
```

## useEffect
Hooksでライフサイクルを使うときで下記のものを含む
### componentDidMount
`[]`中をからにしておくことで一回しか作動しない
```
useEffect(() => {
    axios
    .get("url)
    .then(res => serRepos(response.data));
}, []);
```
### componentDidUpdate
`[]`に変更する値を入れると中身が入れ替わるたびに作動する
```
useEffect(() => {
    document.title = 'You clicked ${count} times';
}, [count]);
```
### componentWillUnmount
コールパックファンクションを使う

***
参照：
[Reactチュートリアル1：犬画像ギャラリーを作ろう](https://zenn.dev/likr/articles/6be53ca64f29aa035f07)



***

# Custom Hooks
[ReactのカスタムHooksをカジュアルに使ってコードの見通しを良くしよう](https://sbfl.net/blog/2020/08/21/use-react-hooks-easy/)
[最近Reactを始めた人向けのReact Hooks入門](https://sbfl.net/blog/2019/11/12/react-hooks-introduction/)
`useXXX`の形で関数を定義する形でカスタムHooksの内部で他のHooksを使う
- 戻り値は無し、1個の値、2個のタプルのいずれかである
    - 無しはuseEffect、1個はuseRef、2個のタプルはuseState、が代表的
    - 4個とか5個とかになってきたら分割を考えてみましょう
使用者側で再評価の制御をしたい場合は依存配列を使う

useEffectの第二引数と同じようにする
```
const useCount = () => {
    const [count, setCount] = useState(0);
    const countUp = () => setCount((c) => c + 1);
    return [count, countUp];
};
```
このuseCountというHooksでは内部でuseStateを使っていて、状態値を保持する。
返却値はcount値そのままと、countを増加させるcountUp関数。

使い方は普通のHooksと同じ。
```
const App = () => {
  const [count, countUp] = useCount();
  return <div onClick={countUp}>{count}</div>
};
```

## useMemo
値を保存するためのフック。
useStateと違い、更新関数はなくキャッシュのような使い方ができる
```
const Calculator = () => {
  const calcResult = useMemo(() => expensiveFunc(), []);

  return <div>{calcResult}</div>
};
```
React本体側に値がキャッシュされ、2度目以降のレンダリングではfuncを実行せずにキャッシュから値を取得するようになる。

気になるのが第二引数の配列です。今回は空配列を渡しています。これは「依存関係」を表しており、ここに変数を並べると、いずれかの変数の値が変わった時にfuncを再実行してくれます。空配列を渡すと「何にも依存しないので、未来永劫1回しか実行しません」の意味になります。

props.idが変わるたびにexpensiveFuncを再実行する場合は以下のように書く
```
const Calculator = (props) => {
  const calcResult = useMemo(() => expensiveFunc(props.id), [props.id]);

  return <div>{calcResult}</div>
};
```

## useCallback
**useMemo**の亜種
useMemoは何でもキャッシュすることができるので、例えば関数をキャッシュすることができます。ただそれには「関数を返す関数」をuseMemoに渡さねばならず、少々見栄えがよろしくありません。

useCallbackは関数特化のuseMemoで、useMemo(() => func, [])と書かなければいけないところをuseCallback(func, [])まで省略できます。あとはuseMemoと同じです。

## useRef
useRefはuseStateの参照版です。useRefを使うことでReact本体側に値を保存できますが、オブジェクトでラップされます。

useRefの主な用途はDOMへの参照です。JSXのrefプロパティにuseRefで作成した参照を渡してやることで、DOMへ簡単にアクセスできるようになります。
```
const Message = () => {
  const divRef = useRef(null);

  useEffect(() => {
    // ref.currentで現在の参照の値を取得できる
    // ここではdiv要素のDOM
    divRef.current.innerText = 'Hello!';
  }, []);

  // refに渡しておく
  return <div ref={divRef}></div>
};
```
上記のように、const ref = useRef(initialValue)で参照を作り、ref.currentで現在値を取得できます。

useRefは汎用的なので一応DOM取得以外にも使えるのですが、基本的にはこの用途のみになるでしょう。