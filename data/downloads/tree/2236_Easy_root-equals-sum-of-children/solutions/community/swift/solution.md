# Swift solution

**Author:** DolphinSu319
**Votes:** 5
**Link:** [https://leetcode.com/problems/root-equals-sum-of-children/solutions/2239768/](https://leetcode.com/problems/root-equals-sum-of-children/solutions/2239768/)

---

```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
class Solution {
    func checkTree(_ root: TreeNode?) -> Bool {
                guard let root = root, let leftVal = root.left?.val, let rightVal = root.right?.val else { return false }
        return root.val == leftVal + rightVal

    }
}
```