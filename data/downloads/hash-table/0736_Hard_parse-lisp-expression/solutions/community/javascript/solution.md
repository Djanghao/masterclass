# JavaScript Recursive Descent Parser Solution

**Author:** ksms
**Votes:** 2
**Link:** [https://leetcode.com/problems/parse-lisp-expression/solutions/1752865/](https://leetcode.com/problems/parse-lisp-expression/solutions/1752865/)

---

Recursive Descent Parser in JavaScript. Firstly split the input string into tokens with the lexical analysis, and then start parsing process.

```
class Lexer {
  constructor(s) {
    this.tokens = [];
    this.idx = 0;
    this.tokenize(s);
  }
  
  tokenize(s) {
    let i = 0;
  
    while (i < s.length) {
      const c = s[i];
      if (/(\\(|\\))/.test(c)) {
        this.tokens.push(c);
        i++;
      } else if (c == '-') {
        i++;
        let num = '';
        while (/\\d/.test(s[i])) {
          num += s[i];
          i++;
        }
        this.tokens.push(Number(num) * -1);
      } else if (/\\d/.test(s[i])) {
        let num = '';
        while (/\\d/.test(s[i])) {
          num += s[i];
          i++;
        }
        this.tokens.push(Number(num));
      } else if (/[a-z]/.test(s[i])) {
        let variable = '';
        while (/([a-z]|[0-9])/.test(s[i])) {
          variable += s[i];
          i++;
        }
        this.tokens.push(variable);
      } else {
        i++;      
      }
    }
  }
  
  read() {
    return this.tokens[this.idx];
  }
  
  readNext() {
    return this.tokens[this.idx + 1];
  }
  
  next() {
    return this.tokens[this.idx++];
  }
}

class Parser {
  constructor(lex) {
    this.lex = lex;
    this.variables = {};
  }
  
  expression(vars) {
    vars = Object.assign({}, vars);
    if (this.lex.read() == '(') {
      this.lex.next();
      let result = this.expr(vars);
      this.lex.next();
      return result;
    }
    return this.expr(vars);
  }
  
  expr(vars) {
    if (this.lex.read() == 'add') {
      this.lex.next();
      return this.expression(vars) + this.expression(vars);
    }
    if (this.lex.read() == 'mult') {
      this.lex.next();
      return this.expression(vars) * this.expression(vars);
    }
    if (this.lex.read() == 'let') {
      return this.let(vars);
    }
    return this.term(vars);
  }
  
  term(vars) {
    if (/^\\-*\\d+/.test(this.lex.read())) {
      return this.lex.next();
    }
    return vars[this.lex.next()];
  }
  
  isVar() {
    if (['(', ')', 'add', 'let', 'mult'].includes(this.lex.read())) {
      return false;
    }
    if (/^\\-*\\d+/.test(this.lex.read())) {
      return false;
    }
    return true;
  }
  
  let(vars) {
    this.lex.next();
    vars = vars || {};
    while (this.isVar() && this.lex.readNext() !== ')') {
      vars[this.lex.next()] = this.expression(vars);
    }
    return this.expression(vars);
  }
}

/**
 * @param {string} expression
 * @return {number}
 */
var evaluate = function(expression) {
  const lex = new Lexer(expression);
  const parser = new Parser(lex);
  
  return parser.expression();
};
```