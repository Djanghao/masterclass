# [Python 3] DFS (in-order) extraction & balanced tree-building

**Author:** jelouta
**Votes:** 46
**Link:** [https://leetcode.com/problems/balance-a-binary-search-tree/solutions/551956/](https://leetcode.com/problems/balance-a-binary-search-tree/solutions/551956/)

---

# Steps
1. We use DFS (in-order) to extract node values while preserving the order.
2. We build the balanced tree by recursively taking the middle element of the ordered list as root.

*Note: we use indices (`l:left`, `r:right`) instead of slicing to preserve space.*

```Python
class Solution:
    def balanceBST(self, root):
        
        def dfs(node):
            if not node: return []
            return dfs(node.left) + [node.val] + dfs(node.right)
        ns = dfs(root)
        
        def build(l, r):
            if l > r: return None
            m = (l + r) // 2
            root = TreeNode(ns[m])
            root.left, root.right = build(l, m-1), build(m + 1, r)
            return root
        
        return build(0, len(ns) - 1)
```
