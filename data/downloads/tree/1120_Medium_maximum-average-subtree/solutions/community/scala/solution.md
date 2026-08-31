# Scala code with detailed comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-average-subtree/solutions/4599951/](https://leetcode.com/problems/maximum-average-subtree/solutions/4599951/)

---

# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(log n)$$

# Code
```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maximumAverageSubtree(self, root: Optional[TreeNode]) -> float:        
 
        max_avg = 0
        def dfs(node):
            nonlocal max_avg

            if not node: return 0, 0

            # Get stats from left and right subtrees
            l_sum, l_cnt = dfs(node.left)
            r_sum, r_cnt = dfs(node.right)

            # Calculate tree avg
            tree_sum = node.val + l_sum + r_sum
            tree_cnt = l_cnt+r_cnt+1

            # Update max avg if needed
            max_avg = max(max_avg, tree_sum/tree_cnt)

            return tree_sum, tree_cnt
    
        dfs(root)
        return max_avg
```