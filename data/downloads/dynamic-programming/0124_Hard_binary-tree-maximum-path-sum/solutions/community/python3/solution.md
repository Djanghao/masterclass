# Python recursive solution beats 98% in time and 75% in memory

**Author:** MiKueen
**Votes:** 33
**Link:** [https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/419793/](https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/419793/)

---

```python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def maxPathSum(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        self.res = float('-inf')
        self.helper(root)
        return self.res 
        
    def helper(self, root):
        if not root:
            return 0
        left, right = self.helper(root.left), self.helper(root.right)
        self.res = max(self.res, root.val + left + right)
        return max(root.val + max(left, right), 0)
   ```