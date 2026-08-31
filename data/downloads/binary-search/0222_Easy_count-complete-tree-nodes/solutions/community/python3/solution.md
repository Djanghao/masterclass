# [Python] Elegant Solution

**Author:** 101leetcode
**Votes:** 49
**Link:** [https://leetcode.com/problems/count-complete-tree-nodes/solutions/693831/](https://leetcode.com/problems/count-complete-tree-nodes/solutions/693831/)

---

```
class Solution:
    def countNodes(self, root: TreeNode) -> int:
        ## RC ##
        ## APPROACH : RECURSION ##
        ## TIME COMPLEXICITY : LOG N * LOG N ##
        
        ## LOGIC ##
        # If left sub tree height equals right sub tree height then,
        #       a. left sub tree is perfect binary tree
        #       b. right sub tree is complete binary tree
        # If left sub tree height greater than right sub tree height then,
        #       a. left sub tree is complete binary tree
        #       b. right sub tree is perfect binary tree
        
        if not root:
            return 0
        
        def depthLeft(node):
            d = 0
            while node:
                d += 1
                node = node.left
            return d

        def depthRight(node):
            d = 0
            while node:
                d += 1
                node = node.right
            return d
        
        ld = depthLeft(root.left)
        rd = depthRight(root.right)
        
        if ld == rd:
            return 2**(ld + 1) - 1
        else:
            return 1 + self.countNodes(root.left) + self.countNodes(root.right)
```