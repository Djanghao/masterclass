# JS/TS solution with regexes. 46ms, beats 100% as of now.

**Author:** Eva-Rosalene
**Votes:** 0
**Link:** [https://leetcode.com/problems/parse-lisp-expression/solutions/4056891/](https://leetcode.com/problems/parse-lisp-expression/solutions/4056891/)

---

# Intuition
As I've already told in [previous solution](https://leetcode.com/problems/parse-lisp-expression/solutions/4056769/converting-to-json-with-string-manipulation-and-using-built-in-json-parse-beats-100-ts-and-js/), LISP is awful lot like JSON. But this time instead of splitting to real tokens and manipulating strings, we are using regexes.

# Approach
1. Replace parentheses with brackets
2. Wrap words starting with lowercase letter in quotation marks
3. Replace sequences of whitespace characters with commas
4. It's somehow proper JSON at this step, thanks to the fact that there are no spaces in test expressions where commas shouldn't be in JSON (like after opening and before closing parentheses) 
5. JSON.parse and then evaluate, that's trivial

# Complexity
Totally depends on how regexes and JSON.parse are implemented in v8/engine of your choice. Evaluating code itself is $$O(n)$$, I believe.

# Code
```ts
function compute(expression: any, scope: Record<string, number>): number {
  if (typeof expression === "number") {
    return expression;
  }

  if (typeof expression === "string") {
    return scope[expression];
  }

  switch(expression[0]) {
    case "let": {
      const nextScope = { ...scope };
      for (let i = 1; i < expression.length - 1; i += 2) {
        let name = expression[i];
        let value = compute(expression[i + 1], nextScope);
        nextScope[name] = value;
      }
      return compute(expression[expression.length - 1], nextScope);
    }
    case "add": return compute(expression[1], scope) + compute(expression[2], scope);
    case "mult": return compute(expression[1], scope) * compute(expression[2], scope);
    default: throw new Error(`Wrong expression: ${JSON.stringify(expression)}`);
  }
}

function evaluate(expression: string): number {
  const json = expression
    .replace(/\\(/g, "[")
    .replace(/\\)/g, "]")
    .replace(/\\b([a-z][a-z0-9]*)\\b/g, (_, $1) => `"${$1}"`)
    .replace(/\\s+/g, ",");
  const parsed = JSON.parse(json);
  return compute(parsed, {});
}
```