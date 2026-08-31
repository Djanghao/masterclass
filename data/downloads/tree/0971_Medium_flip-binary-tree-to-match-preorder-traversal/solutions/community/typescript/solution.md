# JavaScript / TypeScript Solution

**Author:** eddyhdzg
**Votes:** 5
**Link:** [https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/1132700/](https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/1132700/)

---

```
// JS
var flipMatchVoyage = function (root, voyage) {
  const res = [];

  const preorderTraverse = (node) => {
    if (!node) return true;
    if (voyage[0] !== node.val) return false;
    voyage.shift();

    if (node.left && node?.left.val !== voyage[0]) {
      res.push(node.val);
      return preorderTraverse(node.right) && preorderTraverse(node.left);
    }
    return preorderTraverse(node.left) && preorderTraverse(node.right);
  };

  return preorderTraverse(root) ? res : [-1];
};
```

```
// TS
function flipMatchVoyage(root: TreeNode | null, voyage: number[]): number[] {
  const res: number[] = [];

  const preorderTraverse = (node: TreeNode | null): boolean => {
    if (!node) return true;
    if (voyage[0] !== node.val) return false;
    voyage.shift();

    if (node.left && node?.left.val !== voyage[0]) {
      res.push(node.val);
      return preorderTraverse(node.right) && preorderTraverse(node.left);
    }
    return preorderTraverse(node.left) && preorderTraverse(node.right);
  };
  return preorderTraverse(root) ? res : [-1];
}
```

More leetcode TypeScript solutions at https://github.com/eddyhdzg/leetcode-typescript-solutions
