# Python Straightforward Binary Search Solution

**Author:** luihsuan
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/3079426/](https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/3079426/)

---

```
class Solution:
    def getIndex(self, reader: 'ArrayReader') -> int:
        l, r = 0, reader.length() - 1
        while l < r:
            mid = (l + r) // 2
            is_odd = (r - l + 1) % 2 == 1
            res = reader.compareSub(l, mid, mid if is_odd else mid + 1, r)

            if res == 1:
                r = mid
            elif res == -1:
                l = mid + 1
            else:
                return mid
        
        return l
```