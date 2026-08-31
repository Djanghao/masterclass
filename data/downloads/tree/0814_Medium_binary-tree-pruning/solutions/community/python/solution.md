# [Python] | 3 Liner

**Author:** nadaralp
**Votes:** 13
**Link:** [https://leetcode.com/problems/binary-tree-pruning/solutions/2540001/](https://leetcode.com/problems/binary-tree-pruning/solutions/2540001/)

---

Post order traversal DFS.

```
class Solution:
    def pruneTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root: return None
        root.left, root.right = self.pruneTree(root.left), self.pruneTree(root.right)
        return root if (root.left or root.right or root.val == 1) else None
```