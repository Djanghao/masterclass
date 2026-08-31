# Python recursion method modified based on Q236 ( Lowest Common Ancestor I)

**Author:** greatidea
**Votes:** 21
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/solutions/966331/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/solutions/966331/)

---

While the helper function is exactly the same as Q 236, the only condition that we need to discuss in the main function is  **the returned node equals one of the target nodes**. In this case, it could be either (1)one node is the ancestor of the other, or (2)only one node appeared in the tree. To return a None for this second scenario, we can **get back to the dfs helper function, start with this returned ancestor and looking for the missing node**.
```
	def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':

        result = self.dfs(root, p, q)
        
        if result == None or result != p and result != q:
            return result
        else:
            if result == p and self.dfs(result, q, q) == None or result == q and self.dfs(result, p, p) == None:
                return None
            else:
                return result
        
            
        
    def dfs(self, node: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if node == None:
            return None
        
        if node == p:
            return p
        if node == q:
            return q
        
        left =  self.dfs(node.left, p, q)
        right = self.dfs(node.right, p, q)
        
        if right == None:
            return left
        elif left == None:
            return right
        else:
            return node
```