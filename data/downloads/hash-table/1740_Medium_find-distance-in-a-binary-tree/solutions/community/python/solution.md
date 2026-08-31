# Clean Python using Lowest Common Ancestor

**Author:** drew42
**Votes:** 54
**Link:** [https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/1039730/](https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/1039730/)

---

This code reuses the recursive function from [Lowest Common Ancestor of Binary Tree (#236](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/))

We want to find the LCA since it is guaranteed to be on the path between p and q. 
Since we're unable to move "up" in a binary tree, we can simple move down in both directions from the LCA to form the path.
Return the distance from the LCA -> p, plus the distance from the LCA -> q. 

Time complexity is O(n) since we have to look at all the nodes at least once in the worst case.
Space complexity is O(logn) for the call stack.

Also, this question shouldn't be a medium considering that #236 is a medium itself lol.

```
class Solution:
    def findDistance(self, root: TreeNode, p: int, q: int) -> int:
        
        def dfs(node):
            if not node or node.val == p or node.val == q:
                return node
            left = dfs(node.left)
            right = dfs(node.right)
            if left and right:
                return node
            else:
                return left or right
            
        def dist(node, target):
            if not node:
                return float('inf')
            if node.val == target:
                return 0
            return 1 + min(dist(node.left, target), dist(node.right, target))
        
        lca = dfs(root)
        return dist(lca, p) + dist(lca, q)
```