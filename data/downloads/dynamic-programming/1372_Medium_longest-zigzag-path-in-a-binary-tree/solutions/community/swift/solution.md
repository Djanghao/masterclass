# Accepted swift solution using DFS

**Author:** teenuburi
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3435693/](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3435693/)

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
    var maxSteps = 0
    func longestZigZag(_ root: TreeNode?) -> Int {
        dfs(root?.right, true, 1)
        dfs(root?.left, false, 1)
        return maxSteps
    }

    func dfs(_ node: TreeNode?, _ isLeft: Bool, _ steps: Int) {
        if node == nil {
            return
        }
        maxSteps = max(maxSteps, steps)
        if isLeft {
            dfs(node?.left, false, steps+1)
            dfs(node?.right, true, 1)
        } else {
            dfs(node?.right, true, steps+1)
            dfs(node?.left, false, 1)
        }
    }
}
```