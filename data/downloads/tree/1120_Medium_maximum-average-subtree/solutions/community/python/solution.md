# Python solution with dfs | Pure function without global or class variables

**Author:** kapilsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-average-subtree/solutions/1242161/](https://leetcode.com/problems/maximum-average-subtree/solutions/1242161/)

---

```
class Solution:
    def maximumAverageSubtree(self, root: TreeNode) -> float:
        def dfs(node):
            if not node:
                return 0, 0, 0 # subtree sum, subtree node count, average
            
            left_sum, left_count, left_mean  = dfs(node.left)
            right_sum, right_count, right_mean  = dfs(node.right)
            current_sum = left_sum + right_sum + node.val
            current_count = left_count + right_count + 1
            current_mean = current_sum / current_count
            return current_sum, current_count, max(current_mean, left_mean, right_mean)
        
        _, _ , root_mean = dfs(root)
        return root_mean
```