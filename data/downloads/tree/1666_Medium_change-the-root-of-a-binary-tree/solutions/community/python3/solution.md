# [Python3] iteratively updating nodes

**Author:** ye15
**Votes:** 4
**Link:** [https://leetcode.com/problems/change-the-root-of-a-binary-tree/solutions/1067433/](https://leetcode.com/problems/change-the-root-of-a-binary-tree/solutions/1067433/)

---

**Algo**
Starting from `leaf` and iteratively update nodes on the path from `leaf` to `root`. 

**Implementation**
```
class Solution:
    def flipBinaryTree(self, root: 'Node', leaf: 'Node') -> 'Node':        
        prev, node = None, leaf
        while node: 
            if node == root:
                if prev == node.right: node.right = None
                else: node.left = None
            else: 
                if prev == node.right: node.right = node.left 
                node.left = node.parent
            node.parent, node, prev = prev, node.parent, node 
        return leaf
```

**Analysis**
Time complexity `O(H)` (height of the branch from `root` to `leaf`)
Space complexity `O(1)`

Edited on 2/15/2021
Adding recursive solution 
```
class Solution:
    def flipBinaryTree(self, root: 'Node', leaf: 'Node') -> 'Node':
        
        def fn(node, prev=None): 
            """Return updated node."""
            if node == root: 
                if prev == node.left: node.left = None
                else: node.right = None
            else: 
                if prev == node.right: node.right = node.left
                node.left = fn(node.parent, node)
            node.parent = prev
            return node 
        
        return fn(leaf)
```