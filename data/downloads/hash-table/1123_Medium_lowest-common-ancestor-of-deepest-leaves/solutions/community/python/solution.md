# python post order solution

**Author:** wangluochao567
**Votes:** 16
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/591279/](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/591279/)

---

```
class Solution:
    def lcaDeepestLeaves(self, root: TreeNode) -> TreeNode:
        def post_order(root):
            if not root:
                return 0, None
            d1, n1 = post_order(root.left)
            d2, n2 = post_order(root.right)
            if d1 == d2:
                return d1+1, root
            elif d1 > d2:
                return d1+1, n1
            else:
                return d2+1, n2
            
        d, n = post_order(root)
        return n
```