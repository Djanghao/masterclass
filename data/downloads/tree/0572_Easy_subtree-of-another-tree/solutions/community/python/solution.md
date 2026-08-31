# Python Easy to Understand

**Author:** ccparamecium
**Votes:** 105
**Link:** [https://leetcode.com/problems/subtree-of-another-tree/solutions/265239/](https://leetcode.com/problems/subtree-of-another-tree/solutions/265239/)

---

```
class Solution:
    def isSubtree(self, s: TreeNode, t: TreeNode) -> bool:
        if not s: 
            return False
        if self.isSameTree(s, t): 
            return True
        return self.isSubtree(s.left, t) or self.isSubtree(s.right, t)

    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        if p and q:
            return p.val == q.val and self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
        return p is q

