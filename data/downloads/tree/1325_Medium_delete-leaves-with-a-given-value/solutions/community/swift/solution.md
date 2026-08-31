# Swift, DFS (40-52 ms)

**Author:** a1pamysss
**Votes:** 2
**Link:** [https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/501892/](https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/501892/)

---

```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.left = nil
 *         self.right = nil
 *     }
 * }
 */
class Solution {
    func removeLeafNodes(_ root: TreeNode?, _ target: Int) -> TreeNode? {
        
        root?.left = removeLeafNodes(root?.left, target)
        root?.right = removeLeafNodes(root?.right, target)
        
        if (root?.val == target && root?.left == nil && root?.right == nil) {
            return nil
        }
        
        return root
    }
}
```