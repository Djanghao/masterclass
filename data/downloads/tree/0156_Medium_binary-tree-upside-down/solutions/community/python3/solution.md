# Python 3 simple, concise dfs

**Author:** mxmb
**Votes:** 10
**Link:** [https://leetcode.com/problems/binary-tree-upside-down/solutions/1214661/](https://leetcode.com/problems/binary-tree-upside-down/solutions/1214661/)

---

```python
	def upsideDownBinaryTree(self, root: TreeNode) -> TreeNode:
        def recurse(node=root, parent=None, right=None):
            if not node:
                return parent
            res = recurse(node.left, node, node.right)
            node.right = parent
            node.left = right
            return res
        return recurse()
```