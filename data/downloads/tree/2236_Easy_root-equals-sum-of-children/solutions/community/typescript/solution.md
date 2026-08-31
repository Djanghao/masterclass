# One line killer | TypeScript & JavaScript

**Author:** zhondori
**Votes:** 3
**Link:** [https://leetcode.com/problems/root-equals-sum-of-children/solutions/2178290/](https://leetcode.com/problems/root-equals-sum-of-children/solutions/2178290/)

---

```
function checkTree(root: TreeNode | null): boolean {
    return root.val === root.left.val + root.right.val
};
```