# Accepted Python Answer: Easy to Understand

**Author:** i-i
**Votes:** 16
**Link:** [https://leetcode.com/problems/univalued-binary-tree/solutions/440997/](https://leetcode.com/problems/univalued-binary-tree/solutions/440997/)

---

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isUnivalTree(self, root: TreeNode) -> bool:
        if not root:
            return True
        
        if root.left and root.val != root.left.val:
            return False
            
        if root.right and root.val != root.right.val:
            return False
        
        return self.isUnivalTree(root.left) and self.isUnivalTree(root.right)
```

Or:

```
class Solution:
    def isUnivalTree(self, root: TreeNode) -> bool:
        if not root:
            return True
        
        if (root.left and root.val != root.left.val) or (root.right and root.val != root.right.val):
            return False
           
        return self.isUnivalTree(root.left) and self.isUnivalTree(root.right)
```

A pythonic approach by @karrenbelt (in the comment):

```
class Solution:
    def isUnivalTree(self, root: TreeNode) -> bool:  # O(n) time and O(1) space

        def dfs(node: TreeNode) -> TreeNode:  # generator for early stopping
            if node:
                yield node
                yield from dfs(node.left)
                yield from dfs(node.right)

        return all(node.val == root.val for node in dfs(root))
```