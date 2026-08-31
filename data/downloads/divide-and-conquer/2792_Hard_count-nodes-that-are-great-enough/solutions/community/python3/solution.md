# Python 3   |||   11 lines, dfs   ||   T/S: 95%  /  95%

**Author:** Spaulding_
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-nodes-that-are-great-enough/solutions/3825007/](https://leetcode.com/problems/count-nodes-that-are-great-enough/solutions/3825007/)

---

```
class Solution:
    def countGreatEnoughNodes(self, root: TreeNode, k: int) -> int:

        def dfs(node):
            if not node: return []

            arr = sorted(dfs(node.left ) +
                         dfs(node.right))[:k]

            if len(arr) >= k and arr[-1] < node.val:
                self.ans+= 1
            else:
                arr.append(node.val)

            return arr


        self.ans = 0
        dfs(root)
        return self.ans
```
[https://leetcode.com/problems/count-nodes-that-are-great-enough/submissions/1295997792/](https://leetcode.com/problems/count-nodes-that-are-great-enough/submissions/1295997792/)


I could be wrong, but I think that time complexity is *O*(*N* log *K*) and space complexity is *O*(*K*), in which *N* ~ `len(nums)` and *K* ~ `k`.