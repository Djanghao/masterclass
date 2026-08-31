# [Python] Iterative O(H)

**Author:** licpotis
**Votes:** 2
**Link:** [https://leetcode.com/problems/change-the-root-of-a-binary-tree/solutions/1221204/](https://leetcode.com/problems/change-the-root-of-a-binary-tree/solutions/1221204/)

---

From leaf to root, for each node
1. moves left subtree to right if it exists
2. makes parent node become its left child
3. updates node.parent and breaks the pointer in its parent node to itself

Time Complexity O(H) H: the depth from root to leaf
```
class Solution:
    def flipBinaryTree(self, root: 'Node', leaf: 'Node') -> 'Node':
        node, parent = leaf, None
        while node != root:
            if node.left:
                node.right = node.left
                
            node.left, node.parent = node.parent, parent
            parent, node = node, node.left
            
            if node.left == parent:
                node.left = None
            else:
                node.right = None
        
        root.parent = parent
        return leaf
```