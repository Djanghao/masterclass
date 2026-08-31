# Swift

**Author:** igoryas_barabas
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-binary-tree-ii/solutions/5307631/](https://leetcode.com/problems/maximum-binary-tree-ii/solutions/5307631/)

---

# Code
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
    func insertIntoMaxTree(_ root: TreeNode?, _ val: Int) -> TreeNode? {
        guard let root else { return TreeNode(val) }
        if val > root.val {
            let node = TreeNode(val)
            node.left = root
            return node
        } else {
            root.right = insertIntoMaxTree(root.right, val)
            return root 
        }
    }
}
```