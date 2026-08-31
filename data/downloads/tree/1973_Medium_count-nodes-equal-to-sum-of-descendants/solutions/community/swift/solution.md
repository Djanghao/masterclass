# 💡Swift - Optimal Solution - Depth-First Search

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/4801753/](https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/4801753/)

---

# Solution
```swift
class Solution {
    func equalToDescendants(_ root: TreeNode?) -> Int {
        var answer = 0
        func dfs(_ node: TreeNode?) -> Int {
            guard let node = node else { return 0 }
            let sum = dfs(node.left) + dfs(node.right)
            if sum == node.val {
                answer += 1
            }
            return sum + node.val
        }
        dfs(root)
        return answer
    }
}
```
# Complexity
- Time: $$O(n)$$
- Space: $$O(n)$$