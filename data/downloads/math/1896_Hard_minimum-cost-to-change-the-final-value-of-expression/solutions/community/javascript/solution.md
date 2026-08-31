# Javascript - HashMap + DFS

**Author:** faustaleonardo
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/solutions/4934965/](https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/solutions/4934965/)

---

# Code
```
/**
 * @param {string} expression
 * @return {number}
 */
var minOperationsToFlip = function (expr) {
  // precompute brackets
  const map = {};
  const stack = [];
  for (let i = 0; i < expr.length; i++) {
    if (expr[i] === '(') {
      stack.push(i);
    } else if (expr[i] === ')') {
      map[i] = stack.pop();
    }
  }

  return dfs(0, expr.length - 1, map, expr)[1];
};

function dfs(start, end, map, expr) {
  if (start === end) return [Number(expr[start]), 1]; // original value, cost

  let start2 = null;
  if (expr[end] === ')') {
    start2 = map[end];
  } else {
    start2 = end;
  }

  // case like: (((((a)))))
  if (start2 === start) return dfs(start + 1, end - 1, map, expr);

  const operator = expr[start2 - 1];
  const [val1, cost1] = dfs(start, start2 - 2, map, expr);
  const [val2, cost2] = dfs(start2, end, map, expr);

  if (operator === '&') {
    if (val1 === 0 && val2 === 0) {
      return [0, Math.min(cost1 + cost2, 1 + cost1, 1 + cost2)];
    }
    if (val1 === 1 && val2 === 1) {
      return [1, Math.min(cost1, cost2)];
    }
    // case: 0 & 1 or 1 & 0
    return [0, 1];
  }

  // case: operator |
  if (val1 === 0 && val2 === 0) {
    return [0, Math.min(cost1, cost2)];
  }
  if (val1 === 1 && val2 === 1) {
    return [1, Math.min(cost1 + cost2, 1 + cost1, 1 + cost2)];
  }
  // case: 0 | 1 or 1| 0
  return [1, 1];
}

```