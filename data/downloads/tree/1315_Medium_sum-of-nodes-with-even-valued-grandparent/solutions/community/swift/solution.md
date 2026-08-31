# ✅ Two-liner, 61 ms Beats 94.74%

**Author:** swifterswifty
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/5496754/](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/5496754/)

---

# Code

```swift
// `hasEP`: Has even-valued parent.
// `hasEGP`: Has even-valued grandparent.
func sumEvenGrandparent(_ root: TreeNode?, _ hasEGP: Bool = false, _ hasEP: Bool = false) -> Int {
    guard let root else { return 0 }
    return (hasEGP ? root.val : 0)
        + sumEvenGrandparent(root.left, hasEP, root.val % 2 == 0)
        + sumEvenGrandparent(root.right, hasEP, root.val % 2 == 0)
}
```