# Clean and fast(94%) 4 line Python3 code

**Author:** ypark66
**Votes:** 88
**Link:** [https://leetcode.com/problems/range-sum-of-bst/solutions/409173/](https://leetcode.com/problems/range-sum-of-bst/solutions/409173/)

---

```
class Solution:
    def rangeSumBST(self, root: TreeNode, L: int, R: int) -> int:
        if root == None: return 0
        if root.val > R: return self.rangeSumBST(root.left,L,R)
        if root.val < L: return self.rangeSumBST(root.right,L,R)
        return root.val + self.rangeSumBST(root.left,L,R) + self.rangeSumBST(root.right,L,R)      
                   
```
