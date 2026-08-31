# [Python3] 4-liner

**Author:** cenkay
**Votes:** 12
**Link:** [https://leetcode.com/problems/two-sum-bsts/solutions/397608/](https://leetcode.com/problems/two-sum-bsts/solutions/397608/)

---

```
class Solution:
    def twoSumBSTs(self, root1: TreeNode, root2: TreeNode, target: int) -> bool:
        def dfs(node):
            return dfs(node.left) | dfs(node.right) | {node.val} if node else set()
        q1 = dfs(root1)
        return any(target - a in q1 for a in dfs(root2))
```
* Extra
```
from functools import lru_cache
class Solution:
    def twoSumBSTs(self, root1: TreeNode, root2: TreeNode, target: int) -> bool:
        @lru_cache()
        def dfs(n1, n2):
            if not n1 or not n2:
                return False
            if n1.val + n2.val < target:
                return dfs(n1.right, n2) or dfs(n1, n2.right)
            elif n1.val + n2.val > target:
                return dfs(n1.left, n2) or dfs(n1, n2.left)
            else:
                return True
        return dfs(root1, root2)
```