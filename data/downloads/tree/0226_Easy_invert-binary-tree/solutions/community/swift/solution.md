# Swift invert binary tree O(n) with explanation

**Author:** Pantelaeo
**Votes:** 6
**Link:** [https://leetcode.com/problems/invert-binary-tree/solutions/3063223/](https://leetcode.com/problems/invert-binary-tree/solutions/3063223/)

---

The function recursively inverts the left and right children of the current node, and then assigns the inverted left and right children to the current node. This process is repeated for each node in the tree, effectively inverting the entire tree.

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
    func invertTree(_ root: TreeNode?) -> TreeNode? {
        guard let root = root else {return nil}
        let left = invertTree(root.left)
        let right = invertTree(root.right)
        root.left = right
        root.right = left
        return root
    }
}
```