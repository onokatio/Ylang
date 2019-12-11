const print_result = text => {
  document.getElementById("result").value = text;
  console.log(text);
};

const compile = codes => {
  var memory = {};
  opcode_list = codes.split("\n");
  // console.log("---------- \n");
  // console.log("[code] " + opcode_list);
  opcode_list.forEach((code, index) => {
    if (
      code.match(/^要するに俺が言いたいのは 「(.*)」 ってことだな！$/) !== null
    ) {
      // console.log("[mode] echo");
      // console.log("string=" + code.split(' ')[1]);
      print_result(
        code.match(/^要するに俺が言いたいのは 「(.*)」 ってことだな！$/)[1]
      );
    } else if (
      code.match(/^要するに俺が言いたいのは (.*) ってことだな！$/) !== null
    ) {
      print_var = code.match(
        /^要するに俺が言いたいのは (.*) ってことだな！$/
      )[1];
      print_result(memory[print_var]);
    } else if (code.match(/が知りたい！$/)) {
      memory[code.split(" ")[0]] = prompt("入力してください。");
    } else if (code.match(/は (.*) だな！$/)) {
      ans_var = code.split(" ")[0];
      expr = code.match(/は (.*) だな！$/)[1];
      arg1 = expr.match(/(.*) と (.*) の(.*)$/)[1];
      if (isNaN(arg1)) {
        arg1 = memory[arg1];
      }
      arg2 = expr.match(/(.*) と (.*) の(.*)$/)[2];
      if (isNaN(arg2)) {
        arg2 = memory[arg2];
      }
      wasa = expr.match(/(.*) と (.*) の(.*)$/)[3];
      if (wasa === "和") {
        ans = parseInt(arg1) + parseInt(arg2);
      } else if (wasa === "差") {
        ans = parseInt(arg1) - parseInt(arg2);
      } else if (wasa === "積") {
        ans = parseInt(arg1) * parseInt(arg2);
      } else if (wasa === "除") {
        ans = parseInt(arg1) / parseInt(arg2);
      } else if (wasa === "アンド") {
        ans = parseInt(arg1) & parseInt(arg2);
      } else if (wasa === "オア") {
        ans = parseInt(arg1) | parseInt(arg2);
      }
      memory[ans_var] = ans;
    } else if (code.match(/もし (.*) なら$/)) {
      expr = code.match(/もし (.*) なら$/)[1];
      if (expr.match(/(.*) が (.*) (.*)$/)) {
        arg1 = expr.match(/(.*) が (.*) (.*)$/)[1];
        if (isNaN(arg1)) {
          arg1 = mamory[arg1];
        }
        arg2 = expr.match(/(.*) が (.*) (.*)$/)[2];
        if (isNaN(arg2)) {
          arg2 = mamory[arg1];
        }
        comp_oper = expr.match(/(.*) が (.*) (.*)$/)[3];
        if (comp_oper === "と等しい") {
          if (arg1 === arg2) {
            ans = true;
          } else if (arg1 !== arg2) {
            ans = false;
          }
        } else if (comp_oper === "より大きい") {
          if (arg1 > arg2) {
            ans = true;
          } else if (arg1 < arg2) {
            ans = false;
          }
        } else if (comp_oper === "より小さい") {
          if (arg1 < arg2) {
            ans = true;
          } else if (arg1 > arg2) {
            ans = false;
          }
        }
      }

      /*
          let index_copy = index
          for( opcode_list[index_copy] !== '{' ) index_copy++;
          compile(opcode_list.slice(index,index_copy))
          index = index_copy+1;
          */
    } else {
      print_result("[mode] other");
    }
  });
};

sourcecode =
  "要するに俺が言いたいのは 「Hello World」 ってことだな！\n" +
  "要するに俺が言いたいのは 「テスト」 ってことだな！\n" +
  "qwerty が知りたい！\n" +
  "要するに俺が言いたいのは qwerty ってことだな！";
"a は 5 と 4 の和 だな！\n" +
  "要するに俺が言いたいのは a ってことだな！\n" +
  "a は a と a の積 だな！\n" +
  "要するに俺が言いたいのは a ってことだな！\n" +
  "b は 2 と 4 のアンド だな！\n" +
  "要するに俺が言いたいのは b ってことだな！\n" +
  "b は 2 と 4 のオア だな！\n" +
  "要するに俺が言いたいのは b ってことだな！";
compile(sourcecode);
