# Easy python using xor

**Author:** majinlion
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-root-of-n-ary-tree/solutions/967381/](https://leetcode.com/problems/find-root-of-n-ary-tree/solutions/967381/)

---

```
class Solution:
    def findRoot(self, tree: List['Node']) -> 'Node':
        ans = 0
        for x in tree:
            ans = ans ^ x.val
            for ch in x.children:
                ans = ans ^ ch.val
        
        for node in tree:
            if node.val == ans:
                return node
```