# [Python3] post-order dfs

**Author:** ye15
**Votes:** 28
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/solutions/1067328/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/solutions/1067328/)

---

**Algo**
Traverse the tree depth-first in post order. 

**Implementation**
```
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', nodes: 'List[TreeNode]') -> 'TreeNode':
        nodes = set(nodes)
        
        def fn(node):
            """Return LCA of nodes."""
            if not node or node in nodes: return node 
            left, right = fn(node.left), fn(node.right)
            return node if left and right else left or right
        
        return fn(root)
```

**Analysis**
Time complexity `O(N)`
Space complexity `O(N)`

[235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/discuss/751540/Python3-move-along-the-tree)
[236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/discuss/1067464/Python3-post-order-dfs)
[1644. Lowest Common Ancestor of a Binary Tree II](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/discuss/1067584/Python3-post-order-dfs)
[1650. Lowest Common Ancestor of a Binary Tree III](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/discuss/1067486/Python3-linked-list)
[1676. Lowest Common Ancestor of a Binary Tree IV](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/discuss/1067328/Python3-post-order-dfs)