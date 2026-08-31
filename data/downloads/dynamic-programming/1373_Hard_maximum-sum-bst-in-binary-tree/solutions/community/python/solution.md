# [Python] Easy-to-understand recursive solution

**Author:** m-Just
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/solutions/531967/](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/solutions/531967/)

---

The code is straightforward. Key is to accumulate the sum bottom-up and nullify the sum once the BST property is violated.
```python
def maxSumBST(self, root: TreeNode) -> int:
    if not root:
        return 0
    self.s = 0
    def helper(cur):
        a, amin, amax = helper(cur.left) if cur.left else (0, float('inf'), float('-inf'))
        b, bmin, bmax = helper(cur.right) if cur.right else (0, float('inf'), float('-inf'))
        if a is not None and b is not None:
            if cur.val > amax and cur.val < bmin:
                s = cur.val + a + b
                self.s = max(self.s, s)
                return s, min(cur.val, amin), max(cur.val, bmax)
        return (None, None, None)
    helper(root)
    return self.s
```
Vote up if you find this helpful, thanks!

**Edit**: an issue suggested by [jesus805](https://leetcode.com/jesus805) in the original solution has been fixed.