# Python Recursive solution

**Author:** ketan35
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-binary-tree-ii/solutions/321104/](https://leetcode.com/problems/maximum-binary-tree-ii/solutions/321104/)

---

```
class Solution:
    def insertIntoMaxTree(self, root: TreeNode, val: int) -> TreeNode:
        if not root:
            return TreeNode(val)
        if val>root.val:
            t=TreeNode(val)
            t.left=root
            return t
        root.right=self.insertIntoMaxTree(root.right,val)
        return root
```

Please comment for any doubt