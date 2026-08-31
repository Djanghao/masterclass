# Easiest 7 lines code in python.

**Author:** Mohammad_tanveer
**Votes:** 30
**Link:** [https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/3295156/](https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/3295156/)

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
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        def dfs(curr,num):
            if curr is None:
                return 0
            num=num*10+curr.val
            if not curr.left  and not curr.right:
                return num
            return dfs(curr.left,num)+dfs(curr.right,num)
        return dfs(root,0)
```