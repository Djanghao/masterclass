# ✅ Swift: Binary Tree Tilt

**Author:** AsahiOcean
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-tree-tilt/solutions/1617999/](https://leetcode.com/problems/binary-tree-tilt/solutions/1617999/)

---

```swift
class Solution {
    func findTilt(_ root: TreeNode?) -> Int {
        guard root != nil else { return 0 }
        var value = 0
        dfs(root, &value)
        return value
    }
    private func dfs(_ root: TreeNode?, _ val: inout Int) {
        guard let root = root else { return }
        dfs(root.left, &val)
        dfs(root.right, &val)
        val += abs((root.left?.val ?? 0) - (root.right?.val ?? 0))
        root.val += (root.left?.val ?? 0) + (root.right?.val ?? 0)
    }
}
```