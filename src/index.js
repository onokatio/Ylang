import React from "react"
import ReactDOM from "react-dom"

import { Alert } from 'react-bootstrap'
import { AlertDismissible } from './components/AlertDismissible.jsx'
import { Toast } from 'react-bootstrap'

import hljs from 'highlight.js'
import 'highlight.js/styles/solarized-dark.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import ylang from './HighlightDefine.js'
hljs.registerLanguage('ylang', ylang);

import { compile } from './vm.js'

import SampleCodes from './components/SampleCodes.jsx'
import SampleCodeCard from './components/SampleCodeCard.jsx'

const samples = require('./samplejson.json')

const run_compile = (e) => {
	const toast = (
		<Toast>
			<Toast.Header>
				<strong className="mr-auto">Compiler status message</strong>
				<small>0 mins go</small>
			</Toast.Header>
			<Toast.Body>Compile finished.</Toast.Body>
		</Toast>
	)
	const result = document.getElementById("result")
	result.value = ''
	const code = document.getElementById("code").value;
	compile(code,0,{})
	ReactDOM.render(toast, document.getElementById("alertlist"))
}

const button = document.getElementById("compileButton")
button.addEventListener("click",run_compile)

ReactDOM.render(<SampleCodes samples={samples} />,document.getElementById("samples"))
