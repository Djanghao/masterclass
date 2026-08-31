# ✅ Cleanest TypeScript Solution (DFS)

**Author:** mlajkim
**Votes:** 4
**Link:** [https://leetcode.com/problems/path-sum/solutions/3177547/](https://leetcode.com/problems/path-sum/solutions/3177547/)

---

# Code (DFS)
```
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false
    if (!root.left && !root.right && root.val === targetSum) return true

    return hasPathSum(root.left, targetSum - root.val)
        || hasPathSum(root.right, targetSum - root.val)
};
```