# 🔥Swift solution. Traverse

**Author:** slavny1
**Votes:** 2
**Link:** [https://leetcode.com/problems/delete-node-in-a-bst/solutions/3770610/](https://leetcode.com/problems/delete-node-in-a-bst/solutions/3770610/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
    func deleteNode(_ root: TreeNode?, _ key: Int) -> TreeNode? {
        guard let root = root else { return nil }
        if root.val > key {
            root.left = deleteNode(root.left, key)
        } else if root.val < key {
            root.right = deleteNode(root.right, key)
        } else {
            if root.right == nil {
                return root.left
            } else if root.left == nil {
                return root.right
            } else {
                var newRight = root.left
                while let right = newRight?.right {
                    newRight = right
                }
                newRight?.right = root.right
                return root.left
            }
        }
        return root
    }
}
    // func deleteNode(_ root: TreeNode?, _ key: Int) -> TreeNode? {
    //     guard let root = root else { return nil }
    //     if root.val == key { return nil }
    //     var node = root
    //     if node.left?.val == key {
    //         if let left = node.left?.left {
    //             let right = node.left?.right
    //             node.left = left
    //             node.left?.right = right
    //         } else if let right = node.left?.right {
    //             node.left = right
    //         }
    //     } else if node.right?.val == key {
    //         if let right = node.right?.right {
    //             let left = node.right?.left
    //             node.right = right
    //             node.right?.left = left
    //         } else if let left = node.right?.left {
    //             node.right = left
    //         }
    //     } else {
    //         if node.val > key {
    //             deleteNode(node.left, key)
    //         } else if node.val < key {
    //             deleteNode(node.right, key)
    //         }
    //     }
    //     return root
    // }
// }
```