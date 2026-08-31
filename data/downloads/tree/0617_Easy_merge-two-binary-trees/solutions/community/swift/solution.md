# Swift switch solution

**Author:** wxxsw
**Votes:** 3
**Link:** [https://leetcode.com/problems/merge-two-binary-trees/solutions/333815/](https://leetcode.com/problems/merge-two-binary-trees/solutions/333815/)

---

```swift
class Solution {
    func mergeTrees(_ t1: TreeNode?, _ t2: TreeNode?) -> TreeNode? {
        switch (t1, t2) {
        case (.some(let t1), .some(let t2)):
            let output = TreeNode(t1.val + t2.val)
            output.left = mergeTrees(t1.left, t2.left)
            output.right = mergeTrees(t1.right, t2.right)
            return output
        case (.some(let t1), .none):
            return t1
        case (.none, .some(let t2)):
            return t2
        case (.none, .none):
            return nil
        }
    }
}
```