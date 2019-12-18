import React from "react"
import ReactDOM from "react-dom"

import hljs from 'highlight.js'
import 'highlight.js/styles/solarized-dark.css'

import ylang from './HighlightDefine.js'
hljs.registerLanguage('ylang', ylang);

import { compile } from './vm.js'

import SampleCodes from './components/SampleCodes.jsx'
import SampleCodeCard from './components/SampleCodeCard.jsx'

const samples = require('./samplejson.json')

const run_compile = (e) => {
	const result = document.getElementById("result")
	result.value = ''
	const code = document.getElementById("code").value;
	compile(code,0,{})
}

const button = document.getElementById("compileButton")
button.addEventListener("click",run_compile)

ReactDOM.render(<SampleCodes samples={samples} />,document.getElementById("samples"))
