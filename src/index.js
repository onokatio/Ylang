import React from "react"
import ReactDOM from "react-dom"

import { compile } from './vm.js'

import SampleCodeCard from './components/SampleCodeCard.jsx'

const run_compile = (e) => {
	const result = document.getElementById("result")
	result.value = ''
	const code = document.getElementById("code").value;
	compile(code,0,{})
}

const button = document.getElementById("compileButton")
button.addEventListener("click",run_compile)

ReactDOM.render(<SampleCodeCard />,document.getElementById("samples"))
