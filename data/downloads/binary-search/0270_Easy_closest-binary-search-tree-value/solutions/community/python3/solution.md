# [Python3] Closest Binary Search Tree Value

**Author:** zhanweiting
**Votes:** 6
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value/solutions/344282/](https://leetcode.com/problems/closest-binary-search-tree-value/solutions/344282/)

---

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def closestValue(self, root: TreeNode, target: float) -> int:
        c = root.val
        while root:
            # update the closest value once the current note's value is more closet to target:
            if abs(root.val - target) < abs(c - target):
                c = root.val
            # use the binary search tree's property to find the closest value to target
            else:
                if root.val < target:
                    root = root.right
                else:
                    root = root.left
        return c
```