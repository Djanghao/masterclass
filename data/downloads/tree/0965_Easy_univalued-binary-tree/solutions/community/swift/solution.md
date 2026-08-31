# ✅ [Swift] Recursion, easy to understand

**Author:** lmvtsv
**Votes:** 1
**Link:** [https://leetcode.com/problems/univalued-binary-tree/solutions/2860784/](https://leetcode.com/problems/univalued-binary-tree/solutions/2860784/)

---

```
class Solution {
    func isUnivalTree(_ root: TreeNode?) -> Bool {
        guard let root = root else { return true }
        return helper(root, root.val)
    }

    func helper(_ root: TreeNode?, _ val: Int) -> Bool {
        guard let root = root else { return true }
        if root.val != val {
            return false
        }
        return helper(root.left, val) && helper(root.right, val)
    }
}
```