# Python O(n) DFS Solution

**Author:** whissely
**Votes:** 6
**Link:** [https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/759899/](https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/759899/)

---

```
class Solution:
    # Time: O(n)
    # Space: O(H)
    def sufficientSubset(self, root: TreeNode, limit: int) -> TreeNode:
        val = self.dfs(root, 0, limit)
        return None if val < limit else root
        
    def dfs(self, node, path_sum, limit):
        if not node:
            return path_sum
        l = self.dfs(node.left, path_sum + node.val, limit)
        r = self.dfs(node.right, path_sum + node.val, limit)
        if not node.left and not node.right:
            ret_val = path_sum + node.val
        elif not node.left:
            ret_val = r
        elif not node.right:
            ret_val = l
        else:
            ret_val = max(l, r)
            
        if l < limit:
            node.left = None
        if r < limit:
            node.right = None
        return ret_val
```