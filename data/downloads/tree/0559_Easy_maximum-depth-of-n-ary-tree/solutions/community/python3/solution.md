# Simple & Easy Solution using DFS by Python 3

**Author:** jamesujeon
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/684633/](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/684633/)

---

```
class Solution:
    def maxDepth(self, root: 'Node') -> int:
        if not root:
            return 0

        depth = 1
        if root.children:
            depth += max(self.maxDepth(child) for child in root.children)
        return depth
```