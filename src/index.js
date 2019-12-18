import React from "react"
import ReactDOM from "react-dom"

import { compile } from './vm.js'

import SampleCodes from './components/SampleCodes.jsx'
import SampleCodeCard from './components/SampleCodeCard.jsx'

const run_compile = (e) => {
	const result = document.getElementById("result")
	result.value = ''
	const code = document.getElementById("code").value;
	compile(code,0,{})
}

const button = document.getElementById("compileButton")
button.addEventListener("click",run_compile)

const samples = [
	{
		title: "サンプル1 Hello World",
		description: "画面に'Hello World'と表示するだけの、簡単なサンプルプログラムです。",
		sourcecode: "要するに俺が言いたいのは 「Hello World」 ってことだな！"
	},
	{
		title: "サンプル2 数値同士の足し算と変数代入",
		description: "数値同士を加算し、その結果を変数へ代入します。",
		sourcecode: "a は 5 と 4 の和 だな！<br>要するに俺が言いたいのは a ってことだな！ "
	}
]

ReactDOM.render(<SampleCodes samples={samples} />,document.getElementById("samples"))
//ReactDOM.render(<SampleCodeCard samples={samples} />,document.getElementById("samples"))
