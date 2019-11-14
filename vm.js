const compile = (codes) => {
	var memory = {};
	opcode_list = codes.split('\n');
	//console.log("---------- \n");
	//console.log("[code] " + opcode_list);
	opcode_list.forEach( (code,index) => {
		if( code.match(/^要するに俺が言いたいのは 「(.*)」 ってことだな！$/) !== null ){

			//console.log("[mode] echo");
			//console.log("string=" + code.split(' ')[1]);
			console.log(code.match(/^要するに俺が言いたいのは 「(.*)」 ってことだな！$/)[1]);

		}else if( code.match(/^要するに俺が言いたいのは (.*) ってことだな！$/) !== null ){
			print_var = code.match(/^要するに俺が言いたいのは (.*) ってことだな！$/)[1];
			console.log(memory[print_var])
		}else if( code.match(/が知りたい！$/) ){

			//console.log("[mode] input");
			//console.log("var=" + code.split(' ')[0]);
			//var a = prompt("入力してください。");

		}else if( code.match(/は (.*) だな！$/) ){
			ans_var=code.split(' ')[0];
			expr = code.match(/は (.*) だな！$/)[1];
			arg1 = expr.match(/(.*) と (.*) の(.*)$/)[1];
			if(isNaN(arg1)){
				arg1 = memory[arg1];
			}
			arg2 = expr.match(/(.*) と (.*) の(.*)$/)[2];
			if(isNaN(arg2)){
				arg2 = memory[arg2];
			}
			wasa = expr.match(/(.*) と (.*) の(.*)$/)[3];
			if(wasa === "和"){
				ans = parseInt(arg1) + parseInt(arg2);
			}else if(wasa === "差"){
				ans = parseInt(arg1) - parseInt(arg2);
			}else if(wasa === "積"){
				ans = parseInt(arg1) * parseInt(arg2);
			}else if(wasa === "除"){
				ans = parseInt(arg1) / parseInt(arg2);
			}else if(wasa === "アンド"){
				ans = parseInt(arg1) & parseInt(arg2);
			}else if(wasa === "オア"){
				ans = parseInt(arg1) | parseInt(arg2);
			}
			memory[ans_var] = ans;
		}else if( code.match(/もし (.*) なら$/) ){
			/*
			let index_copy = index
			for( opcode_list[index_copy] !== '{' ) index_copy++;
			compile(opcode_list.slice(index,index_copy))
			index = index_copy+1;
			*/
		}else{
			console.log("[mode] other");
		}
	});
}

sourcecode =
        "要するに俺が言いたいのは 「Hello World」 ってことだな！\n" +
	"要するに俺が言いたいのは 「テスト」 ってことだな！\n" +
	"a は 5 と 4 の和 だな！\n" +
	"要するに俺が言いたいのは a ってことだな！\n" +
	"a は a と a の積 だな！\n" +
	"要するに俺が言いたいのは a ってことだな！\n" +
	"b は 2 と 4 のアンド だな！\n" +
	"要するに俺が言いたいのは b ってことだな！\n" +
	"b は 2 と 4 のオア だな！\n" +
	"要するに俺が言いたいのは b ってことだな！\n"
compile(sourcecode);
