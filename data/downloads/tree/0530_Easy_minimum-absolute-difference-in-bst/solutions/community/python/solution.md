# Python recursive

**Author:** leetcoder289
**Votes:** 117
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/338515/](https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/338515/)

---

Keep track of the lo and hi bounds of each node, when you've passed the leaf nodes, compute `hi - lo` to get the lowest difference along that path 
```
class Solution(object):
    def getMinimumDifference(self, root):
        def fn(node, lo, hi):
            if not node: return hi - lo
            left = fn(node.left, lo, node.val)
            right = fn(node.right, node.val, hi)
            return min(left, right)
        return fn(root, float('-inf'), float('inf'))
```