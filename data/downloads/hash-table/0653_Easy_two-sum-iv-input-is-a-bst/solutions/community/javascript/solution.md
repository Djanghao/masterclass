# JavaScript DFS with a Set

**Author:** shengdade
**Votes:** 33
**Link:** [https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/502017/](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/502017/)

---

```javascript
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  if (!root) return false;
  const set = new Set();
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (set.has(k - node.val)) return true;
    set.add(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return false;
};
```

* 421/421 cases passed (72 ms)
* Your runtime beats 99.74 % of javascript submissions
* Your memory usage beats 92.31 % of javascript submissions (41.9 MB)