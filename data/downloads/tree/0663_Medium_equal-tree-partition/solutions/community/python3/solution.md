# Python | 2 recursions

**Author:** haoqiu123
**Votes:** 1
**Link:** [https://leetcode.com/problems/equal-tree-partition/solutions/4019496/](https://leetcode.com/problems/equal-tree-partition/solutions/4019496/)

---

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def checkEqualTree(self, root: Optional[TreeNode]) -> bool:
        def tree_sum(node):
            if not node:
                return 0
            a = node.val
            a += tree_sum(node.left)
            a += tree_sum(node.right)
            return a
        s = tree_sum(root)
        def dfs(node):
            if not node:
                return False
            if tree_sum(node) * 2 == s:
                return True
            else:
                return dfs(node.left) or dfs(node.right)
        return dfs(root.left) or dfs(root.right)
```