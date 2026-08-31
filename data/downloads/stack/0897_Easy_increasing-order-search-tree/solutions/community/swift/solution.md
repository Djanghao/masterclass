# Another Swift Solution

**Author:** p-uvarov
**Votes:** 2
**Link:** [https://leetcode.com/problems/increasing-order-search-tree/solutions/1735569/](https://leetcode.com/problems/increasing-order-search-tree/solutions/1735569/)

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
    var array = [Int]()
    
    func increasingBST(_ root: TreeNode?) -> TreeNode? {
        helper(root)
        
        let first = TreeNode(0)
        var current: TreeNode? = first
        
        for val in array {
            current?.right = TreeNode(val)
            current = current?.right
        }
        
        return first.right
    }
    
    func helper(_ node: TreeNode?) {
        guard let node = node else { return }
        
        helper(node.left)
        array.append(node.val)
        helper(node.right)
    }
}
```