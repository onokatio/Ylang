# Y Language

## Build

```shell
$ npm install --save-dev
$ npm run dev # development build
$ npm run build # production build
$ npm run start # development build & local serve
```

## Language specifications

# 四則演算

### 構文

```toml
<値/変数名> <と/から> <値/変数名> <の和/を引いた差/の積/を割った商>
```

### 例

```toml
a と b の和
a から b を引いた差
a と b の積
a と b の整除
```

# ビット演算

### 構文

```toml
<値/変数名> と <値/変数名> の<アンド/オア/ノット>
```

### 例

```toml
a と b のアンド
a と b のオア
a と b のノット
```

# 比較

### 構文

```toml
<値/変数名> が <値/変数名> <と等しい/より大きい/より小さい>
```

### 例

```toml
a が 5 と等しい
```

# レジスタ代入

### 構文

```toml
<値/変数名> は <四則演算/ビット演算> だな！
```

### 例

```toml
a は 5 と b の和 だな！
```

# 変数を画面に表示

### 構文

```toml
要するに俺が言いたいのは <値/変数名> ってことだな！
```

### 例

```toml
要するに俺が言いたいのは a ってことだな！
```

# 文字列を画面に表示

### 構文

```toml
要するに俺が言いたいのは 「<文字列>」 ってことだな！
```

### 例

```toml
要するに俺が言いたいのは 「不可能ではない」 ってことだな！
```

# 画面から入力

### 構文

```toml
<変数名> が知りたい！
```

### 例

```toml
a が知りたい！
```

# 条件分岐

### 構文

```toml
もし <式> なら
<文>
[
そうじゃなきゃ
<文>
]
だな！
```

### 例

```toml
もし a が 0 と等しい なら

要するに俺が言いたいのは 「aはゼロだった！」 ってことだ！

もしくは

要するに俺が言いたいのは 「aはゼロじゃなかった！」 ってことだ！

だな！
```

## Todo

- looping
- split sourcecode
- function definition
