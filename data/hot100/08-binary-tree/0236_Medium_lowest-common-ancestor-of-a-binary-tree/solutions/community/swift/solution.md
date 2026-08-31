# [Swift] DFS

**Author:** thebnich
**Votes:** 4
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/653839/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/653839/)

---

```
class Solution {
    func lowestCommonAncestor(_ root: TreeNode?, _ p: TreeNode?, _ q: TreeNode?) -> TreeNode? {
        if (root === nil || root === p || root === q) { return root }
        let left = lowestCommonAncestor(root?.left, p, q)
        let right = lowestCommonAncestor(root?.right, p, q)
        return (left != nil) ? (right != nil ? root : left) : right
    }
}
```