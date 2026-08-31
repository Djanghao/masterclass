# Easy recursive python solution

**Author:** forestsong
**Votes:** 8
**Link:** [https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/276751/](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/276751/)

---

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def recoverFromPreorder(self, s: str) -> TreeNode:
        self.index = 0
        def dfs(depth):
            if self.index == len(s): return
            if not all (s[self.index+i] == '-' for i in range(depth)): return 
            self.index += depth
            curr = 0
            while self.index < len(s) and s[self.index].isdigit():
                curr = curr * 10 + int(s[self.index])
                self.index += 1
            node = TreeNode(curr)
            node.left = dfs(depth+1)
            node.right = dfs(depth+1)
            return node
        return dfs(0)
    
```