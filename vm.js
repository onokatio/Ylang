const compile = (code) => {
	opcode_list = code.split(' ');
	//console.log("---------- \n");
	//console.log("[code] " + opcode_list);
	if( code.match(/^要するに俺が言いたいのは 「(.*)」 ってことだな！$/) !== null ){

		//console.log("[mode] echo");
		//console.log("string=" + code.split(' ')[1]);
		console.log(code.match(/^要するに俺が言いたいのは 「(.*)」 ってことだな！$/)[1]);

	}else if( code.match(/が知りたい！$/) ){

		//console.log("[mode] input");
		//console.log("var=" + code.split(' ')[0]);
		var a = prompt("入力してください。");

	}else if( code.match(/は (.*) だな！$/) ){
		//console.log("[mode] var");
		//console.log("var=" + code.split(' ')[0]);
		//console.log("expr=" + code.match(/は (.*) だな！$/)[1]);
	}else{
		console.log("[mode] other");
	}
}

compile("要するに俺が言いたいのは 「不可能ではない」 ってことだな！");
compile("要するに俺が言いたいのは 「aaaaaaaaaa」 ってことだな！");
compile("a が知りたい！");
compile("a は 5 と b の和 だな！");
