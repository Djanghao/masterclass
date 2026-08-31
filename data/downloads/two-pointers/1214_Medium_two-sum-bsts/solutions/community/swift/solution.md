# Swift Naive solution

**Author:** oldinzaghi
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-bsts/solutions/4188603/](https://leetcode.com/problems/two-sum-bsts/solutions/4188603/)

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
    var found = false
    func twoSumBSTs(_ root1: TreeNode?, _ root2: TreeNode?, _ target: Int) -> Bool {
       
        func traverse(_ root: TreeNode?) {
            guard let root = root else { return }
            let cur = root.val
            let remaining = target - cur
            if findNode(root2, remaining) {
                found = true
                return
            }
            traverse(root.left)
            traverse(root.right)
        }
        
        func findNode(_ root: TreeNode?, _ subTarget: Int) -> Bool {
            if root == nil { return false }
            if root?.val == subTarget { return true }
            return findNode(root?.left, subTarget) || findNode(root?.right, subTarget)
        }
        
        traverse(root1)
        return found
    }
}
```