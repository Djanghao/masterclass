# ✅ Four-liner, Recursive traversal, 0 ms Beats 100%

**Author:** swifterswifty
**Votes:** 1
**Link:** [https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/3222136/](https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/3222136/)

---

# Code

```swift
func findSecondMinimumValue(_ root: TreeNode?) -> Int {
    let nums = numSet(root).sorted()
    return nums.count > 1 ? nums[1] : -1
}

private func numSet(_ root: TreeNode?) -> Set<Int> {
    guard let root = root else { return [] }
    return Set([root.val]).union(numSet(root.left)).union(numSet(root.right))
}
```