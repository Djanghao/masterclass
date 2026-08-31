# [Python 3] Inorder with comparing with previous node

**Author:** yourick
**Votes:** 31
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/3636087/](https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/3636087/)

---

```
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        cur, stack, minDiff, prev = root, [], 10**5, -10**5
        
        while stack or cur:
            while cur:
                stack.append(cur)
                cur = cur.left
            node = stack.pop()
            minDiff = min(minDiff, node.val - prev)
            prev = node.val
            cur = node.right
        
        return minDiff
```