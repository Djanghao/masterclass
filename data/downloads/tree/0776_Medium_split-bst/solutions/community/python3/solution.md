# Recursion

**Author:** dMXj4npUpC
**Votes:** 2
**Link:** [https://leetcode.com/problems/split-bst/solutions/5223193/](https://leetcode.com/problems/split-bst/solutions/5223193/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def splitBST(self, root: Optional[TreeNode], target: int) -> List[Optional[TreeNode]]:
        if not root:
            return [None, None]
        if root.val == target:
            big = root.right
            root.right = None
            small = root
            return [small, big]
        elif root.val < target:
            [small, big] = self.splitBST(root.right, target)
            root.right = small
            return [root, big]
        else:
            [small, big] = self.splitBST(root.left, target)
            root.left = big
            return [small, root]
```