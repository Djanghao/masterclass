# Easy Swift Solution

**Author:** kripenometr
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-binary-tree/solutions/3685222/](https://leetcode.com/problems/maximum-binary-tree/solutions/3685222/)

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
    func constructMaximumBinaryTree(_ nums: [Int]) -> TreeNode? {
        guard let indexMax = nums.enumerated().max { $0.1 < $1.1 }?.offset else { return nil }

        let node = TreeNode(nums[indexMax])
        node.left = constructMaximumBinaryTree(Array(nums[0..<indexMax]))
        node.right = constructMaximumBinaryTree(Array(nums[indexMax + 1..<nums.count]))

        return node
    }
}
```