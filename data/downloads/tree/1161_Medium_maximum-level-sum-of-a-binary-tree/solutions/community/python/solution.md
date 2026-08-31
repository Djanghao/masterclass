# [Python] Simple and fast recursive solution

**Author:** domrusch
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/818886/](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/818886/)

---

```
from collections import defaultdict

class Solution:
    def maxLevelSum(self, root: TreeNode) -> int:
        levels = defaultdict(int)
        def sum_vals(root, depth):
            if root:
                levels[depth] += root.val
                sum_vals(root.left,  depth+1)
                sum_vals(root.right, depth+1)
			
        sum_vals(root, 1)
        return max(levels, key=levels.get)
```

Simply find the sum for each level by recursing into each child with that childs level, and then return the level with the highest sum.