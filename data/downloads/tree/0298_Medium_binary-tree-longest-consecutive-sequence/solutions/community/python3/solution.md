# Python dfs

**Author:** mxmb
**Votes:** 4
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/1369271/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/1369271/)

---

```python
def longestConsecutive(self, root: TreeNode) -> int:
        max_ = 1
        def dfs(node=root):
            if not node:
                return 0
            left, right = dfs(node.left), dfs(node.right)
            left = left+1 if (node.left and node.left.val == node.val+1) else 1
            right = right+1 if (node.right and node.right.val == node.val+1) else 1
            nonlocal max_
            max_ = max(left, right, max_)
            return max(left, right)
        dfs()
        return max_
```