# ✅ Nine-liner, 15 ms Beats 100%

**Author:** swifterswifty
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/3245229/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/3245229/)

---

# Code

```swift
func constructFromPrePost(_ preorder: [Int], _ postorder: [Int]) -> TreeNode? {
    // l1, r1: left/right indices in preorder; 
    // l2, r2: left/right indices in postorder.
    func build(_ l1: Int, _ r1: Int, _ l2: Int, _ r2: Int) -> TreeNode? {
        guard l1 < r1 else { return nil }
        guard r1 - l1 > 1 else { return TreeNode(preorder[l1]) }
        let cut1 = preorder[l1+1..<r1].firstIndex { $0 == postorder[r2-2] } ?? r1
        let length = cut1 - l1 - 1
        let cut2 = l2 + length
        return TreeNode(preorder[l1], build(l1+1, cut1, l2, cut2), build(cut1, r1, cut2, r2-1))
    }
    return build(0, preorder.count, 0, postorder.count)
}
```