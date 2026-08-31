# Python, 100ms, no global var

**Author:** jrusev
**Votes:** 9
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/101530/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/101530/)

---

```
def longestConsecutive(self, root):
    return max(self.get_max(root))

def get_max(self, root):
    """Return max increasing and max decreasing ending at root, and max overall."""
    if not root:
        return 0, 0, 0
        
    inc, dec = 1, 1

    li, ld, lt = self.get_max(root.left)
    ri, rd, rt = self.get_max(root.right)

    if root.left:
        if li and root.left.val - root.val == 1:
            inc = li + 1

        if ld and root.left.val - root.val == -1:
            dec = ld + 1

    if root.right:
        if ri and root.right.val - root.val == 1:
            inc = max(inc, ri + 1)

        if rd and root.right.val - root.val == -1:
            dec = max(dec, rd + 1)

    return inc, dec, max(inc + dec - 1, lt, rt)
```