# Another Swift Solution

**Author:** p-uvarov
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/1740560/](https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/1740560/)

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
    func getLonelyNodes(_ root: TreeNode?) -> [Int] {
        guard let root = root else { return [] }
        
        if let right = root.right, root.left == nil {
            return [right.val] + getLonelyNodes(root.right)
        } else if let left = root.left, root.right == nil {
            return [left.val] + getLonelyNodes(root.left)
        } else {
            return getLonelyNodes(root.left) + getLonelyNodes(root.right)
        }
    }
}
```