# javascript OOP and rescursion

**Author:** postor
**Votes:** 1
**Link:** [https://leetcode.com/problems/basic-calculator-iv/solutions/1016322/](https://leetcode.com/problems/basic-calculator-iv/solutions/1016322/)

---

```
class Unit {
  constructor(count, val = []) {
    this.count = count
    this.val = val
    this.val.sort()
    this.valStr = this.val.join('*')
  }
  product(u1 = new Unit) {
    return new Unit(this.count * u1.count, this.val.concat(u1.val))
  }
  toString() {
    return this.count + (this.valStr ? '*' + this.valStr : '')
  }
}
class Exp {
  /**
   * 
   * @param {Unit[]} children 
   */
  constructor(children = []) {
    this.children = []
    this.dic = new Map()
    for (let child of children) this.addUnit(child)
  }

  addUnit(u = new Unit) {
    let { dic, children } = this
    if (dic.has(u.valStr))
      children[dic.get(u.valStr)].count += u.count
    else {
      dic.set(u.valStr, children.length)
      children.push(u)
    }
  }

  product(exp1 = new Exp) {
    let exp = new Exp
    this.children.forEach(x => {
      exp1.children.forEach(y => {
        exp.addUnit(x.product(y))
      })
    })
    return exp
  }

  add(exp1 = new Exp) {
    exp1.children.forEach(x => this.addUnit(x))
    return this
  }

  toArray() {
    let group = new Map()
    for (let x of this.children) {
      if (!group.has(x.val.length)) group.set(x.val.length, [])
      x.count != 0 && group.get(x.val.length).push(x)
    }
    let groupArr = [...group.entries()].sort((a, b) => b[0] - a[0])
    return groupArr.map(([_, x]) => {
      x.sort((a, b) => a.valStr.localeCompare(b.valStr))
      return x.map(x => x.toString())
    }).flat()
  }
}

/**
 * @param {string} expression
 * @param {string[]} evalvars
 * @param {number[]} evalints
 * @return {string[]}
 */
var basicCalculatorIV = function (expression, evalvars, evalints) {
  let tokens = toTokens(expression)
    .map(x => /^\\d+$/.test(x) ? Number.parseInt(x) : x),
    vals = toVarDic(evalvars, evalints), i = 0

  let exp = nextExp()
  return exp.toArray()


  function nextExp() {
    if (i >= tokens.length) return undefined
    let [exp, op1] = [nextUnit(), nextOperator()]
    if (!op1 || op1 == ')') return exp
    let exp1 = nextUnit()
    while (true) {
      let op2 = nextOperator()
      if (!op2 || op2 == ')') return dealDefault()
      let exp2 = nextUnit()
      switch (op2) {
        case '+':
        case '-':
          exp = dealDefault()
          op1 = op2
          exp1 = exp2
          continue
        case '*':
          exp1 = exp1.product(exp2)
          continue
        default:
          return dealDefault()
      }
      function dealDefault() {
        switch (op1) {
          case '+':
            return exp.add(exp1)
          case '-':
            let expz = exp1.product(new Exp([new Unit(-1, [])]))
            return exp.add(expz)
          case '*':
            return exp.product(exp1)
        }
        debugger
      }
    }
  }

  /**
   * @returns {Exp}
   */
  function nextUnit() {
    if (i >= tokens.length) return undefined
    let rtn
    if (tokens[i] == '(') {
      i++
      return nextExp()
    }
    else if (Number.isInteger(tokens[i])) rtn = new Exp([
      new Unit(tokens[i], [])
    ])
    else if (vals.has(tokens[i])) rtn = new Exp([
      new Unit(vals.get(tokens[i]), [])
    ])
    else rtn = new Exp([
      new Unit(1, [tokens[i]])
    ])
    i++
    return rtn
  }
  function nextOperator() {
    if (i >= tokens.length) return undefined
    let op = tokens[i]
    i++
    return op
  }
};

function toTokens(str = '') {
  let tokens = [], tmp = '', keyWords = {
    '(': true,
    ')': true,
    '+': true,
    '*': true,
  }
  for (let char of str) {
    if (keyWords[char]) {
      if (tmp) tokens.push(tmp)
      tokens.push(char)
      tmp = ''
      continue
    }
    if (char == ' ') {
      if (tmp) {
        tokens.push(tmp)
        tmp = ''
      }
      continue
    }
    tmp += char
  }
  if (tmp) tokens.push(tmp)
  return tokens
}

function toVarDic(keys = [], vals = []) {
  let dic = new Map
  for (let i = 0; i < keys.length; i++) {
    dic.set(keys[i], vals[i])
  }
  return dic
}

// console.log(basicCalculatorIV("((a - b) * (b - c) + (c - a)) * ((a - b) + (b - c) * (c - a))", [], []))

// console.log(basicCalculatorIV("e + 8 - a + 5", ['e'], [1]))
```