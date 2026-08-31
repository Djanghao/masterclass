# Python || One Line Solution || Easy

**Author:** pulkit_uppal
**Votes:** 37
**Link:** [https://leetcode.com/problems/root-equals-sum-of-children/solutions/3524372/](https://leetcode.com/problems/root-equals-sum-of-children/solutions/3524372/)

---

```
class Solution:
    def checkTree(self, root: Optional[TreeNode]) -> bool:
        return root.val==root.left.val+root.right.val
```
**An upvote will be encouraging**
