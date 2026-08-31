# Easy to understand solution

**Author:** teenuburi
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-tree-paths/solutions/3447718/](https://leetcode.com/problems/binary-tree-paths/solutions/3447718/)

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
    func binaryTreePaths(_ root: TreeNode?) -> [String] {
        var returnArr = [String]()
        if root == nil {
            return []
        } 
        if root?.left == nil && root?.right == nil {
            return ["\\(root!.val)"]
        }

        if let left = root?.left {
            let lArr = binaryTreePaths(root?.left)
            for item in lArr {
                returnArr.append("\\(root!.val)->\\(item)")
            }
        }
        if let right = root?.right {
            let rArr = binaryTreePaths(root?.right)
            for item in rArr {
                returnArr.append("\\(root!.val)->\\(item)")
            }
        }
        return returnArr
    }
}
```