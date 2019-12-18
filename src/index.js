import { compile } from './vm.js'

const run_compile = (e) => {
	code = document.getElementById("code").value;
	compile(code,0,{})
}

const button = document.getElementById("compileButton")
button.addEventListener("click",run_compile)
