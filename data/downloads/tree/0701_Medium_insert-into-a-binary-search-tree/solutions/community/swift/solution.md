# Swift. Easy to understand BST insertion

**Author:** protodimbo
**Votes:** 2
**Link:** [https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/4653109/](https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/4653109/)

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
    func insertIntoBST(_ root: TreeNode?, _ val: Int) -> TreeNode? {
        guard let root else { return TreeNode(val) }

        if val > root.val {
            root.right = insertIntoBST(root.right, val)
        } else if val < root.val {
            root.left = insertIntoBST(root.left, val)
        } 
        
        return root
    }
}
```