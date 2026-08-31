# Using DFS and Shift Operator

**Author:** user8649vD
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/5991716/](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/5991716/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
DFS with recursion.
# Approach
<!-- Describe your approach to solving the problem. -->
Use DFS to find the path and Shift Operator to calculate decimal number.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
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
    func sumRootToLeaf(_ root: TreeNode?, _ path: [Int] = []) -> Int {
        
        if root?.left == nil, root?.right == nil, root != nil {

            let nums = path + [root!.val]
            let total = nums.count

            var result = 0
            
            // Calculate decimal from binary.
            for (i, val) in nums.enumerated() {
                // Position from left to right of the decimal number.
                let position = total - i - 1
                if val == 1 {
                    // Use shift operated to calculate 2 of power n.
                    result += (1 << position)
                }
            }

            return result
        }

        var sum = 0

        // Traverse using DFS.
        if root?.left != nil {
            sum = sumRootToLeaf(root?.left, path + [root!.val])
        }

        if root?.right != nil {
            sum = sum + sumRootToLeaf(root?.right, path + [root!.val])
        }

        return sum
    }
}
```