# ✅ Cleanest Swift solution, 3 lines

**Author:** Vince14Genius
**Votes:** 3
**Link:** [https://leetcode.com/problems/range-sum-of-bst/solutions/4524868/](https://leetcode.com/problems/range-sum-of-bst/solutions/4524868/)

---

# Code
```
class Solution {
    func rangeSumBST(_ root: TreeNode?, _ low: Int, _ high: Int) -> Int {
        guard let root = root else { return 0 }
        let curr = (low...high).contains(root.val) ? root.val : 0
        return curr
            + (root.val >= low ? rangeSumBST(root.left, low, high) : 0)
            + (root.val <= high ? rangeSumBST(root.right, low, high) : 0)
    }
}
```

- \u2705 uses `ClosedRange` + `contains` instead of unnecessarily long `>= && <=` comparisons
- \u2705 tail recursion
- \u2705 `guard let` instead of `if let`
- \u2705 3 lines only, no `var` declarations
- \u2705 only does recursion on the half of the tree that actually contains values in the range