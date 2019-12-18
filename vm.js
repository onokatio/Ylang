const print_result = text => {
	if(typeof document !== "undefined"){
		document.getElementById("result").value += text
	}
	console.log(text)
}

const compile_nop = (codes,pc,memory) => {
	opcode_list = codes.split('\n');
	while( pc < opcode_list.length ){
		const code = opcode_list[pc];
		if( code.match(/^だな！$/) !== null ){
			return pc;
		}else if( code.match(/^そうじゃなきゃ$/) !== null ){
			return pc;
		}
		pc++
	}
	return pc;
}

const compile = (codes,pc,memory) => {
	opcode_list = codes.split('\n');
	while( pc < opcode_list.length ){
		const code = opcode_list[pc];

		if( code.match(/^要するに俺が言いたいのは 「(.*)」 ってことだな！$/) !== null ){

			print_result(code.match(/^要するに俺が言いたいのは 「(.*)」 ってことだな！$/)[1] + "\n");

		}else if( code.match(/^要するに俺が言いたいのは (.*) ってことだな！$/) !== null ){
			print_var = code.match(/^要するに俺が言いたいのは (.*) ってことだな！$/)[1];
			print_result(memory[print_var])
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
			expr = code.match(/もし (.*) なら$/)[1];
			if( expr.match( /(.*) が (.*) (.*)$/ ) ){
				arg1 = expr.match( /(.*) が (.*) (.*)$/ )[1];
				if(isNaN(arg1)){
					arg1 = memory[arg1];
				}
				arg2 = expr.match( /(.*) が (.*) (.*)$/ )[2];
				if(isNaN(arg2)){
					arg2 = memory[arg1];
				}
				comp_oper = expr.match( /(.*) が (.*) (.*)$/ )[3];
				if(comp_oper === "と等しい"){
					if(arg1 == arg2){
						ans = true;
					}else if(arg1 != arg2){
						ans = false;
					}
				}else if(comp_oper === "より大きい"){
					if(arg1 > arg2){
						ans = true;
					}else if(arg1 < arg2){
						ans = false;
					}
				}else if(comp_oper === "より小さい"){
					if(arg1 < arg2){
						ans = true;
					}else if(arg1 > arg2){
						ans = false;
					}
				}
				if(ans === true){
					let new_pc = compile(codes,pc+1,memory)
					if(opcode_list[new_pc].match(/^そうじゃなきゃ$/) !== null){
						new_pc = compile_nop(codes,new_pc+2,memory)
					}
					pc = new_pc;
				}else{
					let new_pc = compile_nop(codes,pc+1,memory)
					if(opcode_list[new_pc].match(/^そうじゃなきゃ$/) !== null){
						new_pc = compile(codes,new_pc+1,memory)
					}
					pc = new_pc;
				}
			}
		}else if( code.match(/^だな！$/) !== null ){
			return pc;
		}else if( code.match(/^そうじゃなきゃ$/) !== null ){
			return pc;
		}else{
			print_result("error: could not parse.");
			print_result(code)
		}
		pc++
	};
	return pc;
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
	"要するに俺が言いたいのは b ってことだな！\n" +
	"もし b が 6 と等しい なら\n" +
		"要するに俺が言いたいのは 「正しい！」 ってことだな！\n" +
		"もし a が 81 と等しい なら\n" +
			"要するに俺が言いたいのは 「正しい！」 ってことだな！\n" +
		"そうじゃなきゃ\n" +
			"要するに俺が言いたいのは 「正しくない！」 ってことだな！\n" +
		"だな！\n" +
	"そうじゃなきゃ\n" +
		"要するに俺が言いたいのは 「正しくない！」 ってことだな！\n" +
	"だな！"
compile(sourcecode,0,{});

