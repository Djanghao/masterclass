# Python binary search

**Author:** mjgallag
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/3054927/](https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/3054927/)

---

```python []
class Solution:
    def getIndex(self, reader: "ArrayReader") -> int:
        l, r = 0, reader.length() - 1
        while l < r:
            m = l + (r - l >> 1)
            cur = (
                reader.compareSub(l, m, m + 1, r)
                if (r - l) & 1
                else reader.compareSub(l, m, m, r)
            )
            if cur == -1:
                l = m + 1
            else:
                r = m
        return l

```