# [Python3] dfs O(N)

**Author:** ye15
**Votes:** 9
**Link:** [https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/940618/](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/940618/)

---

Algo 
Traverse the tree. At each node, compare the height of left subtree to the height of right subtree. 
1) if left == right, return node;
2) if left > right, move to left subtree;
3) if left < right, move to right subtree. 

Implementation
```
class Solution:
    def subtreeWithAllDeepest(self, root: TreeNode) -> TreeNode:
        
        @lru_cache(None)
        def fn(node):
            """Return height of tree rooted at node."""
            if not node: return 0
            return 1 + max(fn(node.left), fn(node.right))
        
        node = root
        while node: 
            left, right = fn(node.left), fn(node.right)
            if left == right: return node
            elif left > right: node = node.left
            else: node = node.right 
```

Analysis
Time complexity `O(N)`
Space complexity `O(N)`

Edited on 12/13/2020
```
class Solution:
    def subtreeWithAllDeepest(self, root: TreeNode) -> TreeNode:
        fn = lru_cache(None)(lambda x: 1 + max(fn(x.left), fn(x.right)) if x else 0)
        
        node = root
        while node: 
            if fn(node.left) == fn(node.right): return node 
            elif fn(node.left) < fn(node.right): node = node.right
            else: node = node.left
        return node 
```