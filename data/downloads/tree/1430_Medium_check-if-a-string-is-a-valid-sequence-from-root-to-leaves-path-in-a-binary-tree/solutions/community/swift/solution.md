# [Swift] DFS, shortest solution

**Author:** odnaks
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/3007811/](https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/3007811/)

---

# Complexity
- Time complexity: O(N)
- Space complexity: O(N)

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
    func isValidSequence(_ root: TreeNode?, _ arr: [Int]) -> Bool {
        guard let root = root, arr.first == root.val else { return false }
        if arr.count == 1, root.left == nil, root.right == nil {
            return true
        }
        return isValidSequence(root.left, Array(arr.dropFirst())) || isValidSequence(root.right, Array(arr.dropFirst()))
    }
}
```