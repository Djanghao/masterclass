# JavaScript: Wierd JSON error on submission

**Author:** khvalin
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-interval/solutions/440806/](https://leetcode.com/problems/remove-interval/solutions/440806/)

---

Hello fellow leetcoders!

During the context, I was getting the following error when I tried to submit my JS solutions. Both 1st task, and this one were giving me that obscure error message. When I reimplemented them with go, both solutions were accepted just fine.
Were I doing someting wrong?

Thank you.

```
undefined:1
SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    Line 59: Char 17 in deserializer.js (Object.deserializer.toInteger2dArray)
    Line 46: Char 36 in solution.js (Object.<anonymous>)
    Line 16: Char 8 in runner.js (Object.runner)
    Line 36: Char 26 in solution.js (Object.<anonymous>)
    Line 689: Char 30 in loader.js (Module._compile)
    Line 700: Char 10 in loader.js (Object.Module._extensions..js)
    Line 599: Char 32 in loader.js (Module.load)
    Line 538: Char 12 in loader.js (tryModuleLoad)
    Line 530: Char 3 in loader.js (Function.Module._load)
```

Solution source code:
```
/**
 * @param {number[][]} intervals
 * @param {number[]} toBeRemoved
 * @return {number[][]}
 */
var removeInterval = function(intervals, toBeRemoved) {
  const res = [];

  const [ a, b ] = toBeRemoved;
  for (let i = 0; i < intervals.length; i++) {
    let [ x, y ] = intervals[i];

    if (x > a && y < b) {
      continue;
    }

    if (a > x && b < y) {
      res.push([ x, a ]);
      res.push([ b, y ]);
      continue;
    }

    if (a > x && a < y) {
      y = a;
    }

    if (b > x && b < y) {
      x = b;
    }

    res.push([ x, y ]);
  }

  return res;
};
```