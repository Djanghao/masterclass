# Javascript - Stack

**Author:** faustaleonardo
**Votes:** 0
**Link:** [https://leetcode.com/problems/is-array-a-preorder-of-some-binary-tree/solutions/3742932/](https://leetcode.com/problems/is-array-a-preorder-of-some-binary-tree/solutions/3742932/)

---

# Code
```
/**
 * @param {number[][]} nodes
 * @return {boolean}
 */
var isPreorder = function (nodes) {
  const stack = [];

  for (const [curr, parent] of nodes) {
    while (stack.length && stack[stack.length - 1] !== parent) {
      stack.pop();
    }
    if (!stack.length && parent !== -1) {
      return false;
    }
    stack.push(curr);
  }

  return true;
};

```