# Python dfs iterative short

**Author:** renzhang88
**Votes:** 8
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/527979/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/527979/)

---

```python
class Solution:
    def longestConsecutive(self, root: TreeNode) -> int:
        if not root: return 0
        stack = [(root, 1)]
        max_seq = 1
        while stack:
            node, strike = stack.pop()
            max_seq = max(max_seq, strike)
            for child in (node.left, node.right):
                if not child: continue
                if child.val == node.val + 1:
                    stack.append((child, strike + 1))
                else:
                    stack.append((child, 1))
        return max_seq 
```