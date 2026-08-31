# JavaScript / TypeScript Solution

**Author:** eddyhdzg
**Votes:** 1
**Link:** [https://leetcode.com/problems/univalued-binary-tree/solutions/908670/](https://leetcode.com/problems/univalued-binary-tree/solutions/908670/)

---

// JS
```
var isUnivalTree = function (root) {
  if (!root) return true;

  const traverse = (node) => {
    if (!node) return true;
    if (root.val !== node.val) return false;
    return traverse(node.left) && traverse(node.right);
  };

  return traverse(root);
};
```
// TS
```
function isUnivalTree(root: TreeNode | null): boolean {
  if (!root) return true;

  const traverse = (node: TreeNode | null): boolean => {
    if (!node) return true;
    if (root.val !== node.val) return false;
    return traverse(node.left) && traverse(node.right);
  };

  return traverse(root);
}
```

More leetcode TypeScript solutions at https://github.com/eddyhdzg/leetcode-typescript-solutions
