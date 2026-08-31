# Python Straightforward Solution

**Author:** Vayne1994
**Votes:** 3
**Link:** [https://leetcode.com/problems/equal-tree-partition/solutions/1433378/](https://leetcode.com/problems/equal-tree-partition/solutions/1433378/)

---

```
class Solution(object):
    def checkEqualTree(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        self.total_sum = self.in_order_sum(root)
        return self.dfs(root)
        
        
    def in_order_sum(self, root):
        if not root:
            return 0 
        
        return self.in_order_sum(root.left) + root.val + self.in_order_sum(root.right)
    
    def dfs(self, root):
        if not root:
            return False
        
        if root.left:
            left_sum = self.in_order_sum(root.left) 
            if left_sum * 2 == self.total_sum:
                return True
        if root.right:
            right_sum = self.in_order_sum(root.right)
            if right_sum * 2 == self.total_sum:
                return True
        return self.dfs(root.left) or self.dfs(root.right)
```