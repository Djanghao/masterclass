# Simple Swift Solution - DFS

**Author:** JayiOSDev
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/5871042/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/5871042/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(n)$$ 

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
    func longestConsecutive(_ root: TreeNode?) -> Int {
        func dfs(_ p: TreeNode?, _ parent: TreeNode?, _ n: Int) -> Int { 
            var n = n
            if p == nil { return n }
            n = parent != nil && p!.val == parent!.val + 1 ? n + 1 : 1
            return max(n, max(dfs(p?.left, p, n), dfs(p?.right, p, n)))
        }
        return dfs(root, nil, 0)
    }
}
```