# Python3 simple recursive DFS without calculating height

**Author:** mxmb
**Votes:** 33
**Link:** [https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/1106547/](https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/1106547/)

---

```python
def findLeaves(self, root: TreeNode) -> List[List[int]]:
        res = []
        def recurse(node):
            if not node:
                return None
            if not(node.left or node.right):
                res[-1].append(node.val)
                return None
            node.left = recurse(node.left)
            node.right = recurse(node.right)
            return node
        while root:
            res.append([])
            root = recurse(root)
        return res
```