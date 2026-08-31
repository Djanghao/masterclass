# 💡Swift - Optimal Solution - Depth-First Search

**Author:** bernikovich
**Votes:** 3
**Link:** [https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4538074/](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4538074/)

---

# Solution
```swift
class Solution {
    func amountOfTime(_ root: TreeNode?, _ start: Int) -> Int {
        var answer = 0

        // Returns distance to the start. Negative values mean
        // that the start is not in the leaf.
        func dfs(_ root: TreeNode?, _ start: Int) -> Int {
            guard let root = root else { return -1 }

            // Traverse children.
            let left = dfs(root.left, start)
            let right = dfs(root.right, start)

            let startDistance = root.val == start ? 0 : max(left, right)
            let maxDepth = min(left, right)

            if startDistance >= 0 {
                // Start found in a child node.
                answer = max(answer, startDistance - maxDepth - 1)
                return startDistance + 1
            } else {
                // Return the max depth.
                return maxDepth - 1
            }
        }

        dfs(root, start)

        return answer
    }
}
```
# Complexity
- Time: $$O(n)$$
- Space: $$O(n)$$