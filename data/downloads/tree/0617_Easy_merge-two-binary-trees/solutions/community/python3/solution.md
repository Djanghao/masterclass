# Python,Recursive Solution Beats 100%

**Author:** tliu77
**Votes:** 60
**Link:** [https://leetcode.com/problems/merge-two-binary-trees/solutions/426243/](https://leetcode.com/problems/merge-two-binary-trees/solutions/426243/)

---

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def mergeTrees(self, t1: TreeNode, t2: TreeNode) -> TreeNode:
        if not t1:
            return t2
        elif not t2:
            return t1
        else:
            res = TreeNode(t1.val + t2.val)
            res.left = self.mergeTrees(t1.left, t2.left)
            res.right = self.mergeTrees(t1.right, t2.right)
        return res
```