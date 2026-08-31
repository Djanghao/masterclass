# TypeScript Solution

**Author:** eddyhdzg
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-left-leaves/solutions/810004/](https://leetcode.com/problems/sum-of-left-leaves/solutions/810004/)

---

```
function sumOfLeftLeaves(root: TreeNode | null, isLeftNode = false): number {
  if (!root) return 0;
  if (isLeftNode && !root.left && !root.right) return root.val;

  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right);
}
```

More leetcode TypeScript solutions at https://github.com/eddyhdzg/leetcode-typescript-solutions
