# 8-line Python Recursion (40ms, beats 100%)

**Author:** leetcoder289
**Votes:** 11
**Link:** [https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/328780/](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/328780/)

---

https://leetcode.com/submissions/detail/241310130/

```
import re

class Solution(object):
    def recoverFromPreorder(self, S):
        vals = [(len(s[1]), int(s[2])) for s in re.findall("((-*)(\\d+))", S)][::-1]

        def fn(level):
            if not vals or level != vals[-1][0]: return None
            node = TreeNode(vals.pop()[1])
            node.left = fn(level+1)
            node.right = fn(level+1)
            return node
        return fn(0)
```