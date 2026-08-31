# ✅ Four-liner, 53 ms Beats 100%, 14.7 MB Beats 100%

**Author:** swifterswifty
**Votes:** 2
**Link:** [https://leetcode.com/problems/trim-a-binary-search-tree/solutions/3245114/](https://leetcode.com/problems/trim-a-binary-search-tree/solutions/3245114/)

---

# Code
```
func trimBST(_ root: TreeNode?, _ low: Int, _ high: Int) -> TreeNode? {
    guard let n = root else { return nil }
    guard n.val >= low else { return trimBST(n.right, low, high) }
    guard n.val <= high else { return trimBST(n.left, low, high) }
    return TreeNode(n.val, trimBST(n.left, low, high), trimBST(n.right, low, high))
}
```