# Simple DFS

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/correct-a-binary-tree/solutions/6068662/](https://leetcode.com/problems/correct-a-binary-tree/solutions/6068662/)

---

```javascript []
var correctBinaryTree = function (root) {
  const dfs = (node, visited) => {
    if (!node || (node.right && visited.has(node.right.val))) return null
    visited.add(node.val)
    node.right = dfs(node.right, visited)
    node.left = dfs(node.left, visited)
    return node
  }
  return dfs(root, new Set())
};
```