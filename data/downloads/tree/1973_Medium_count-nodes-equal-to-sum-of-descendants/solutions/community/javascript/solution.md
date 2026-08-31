# Javascript - Post Order

**Author:** faustaleonardo
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/4797138/](https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/4797138/)

---

# Code
```
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var equalToDescendants = function (root) {
  const ans = { val: 0 };
  dfs(root, ans);

  return ans.val;
};

function dfs(root, ans) {
  if (!root) return 0;

  const left = dfs(root.left, ans);
  const right = dfs(root.right, ans);
  if (left + right === root.val) ans.val++;

  return left + right + root.val;
}

```