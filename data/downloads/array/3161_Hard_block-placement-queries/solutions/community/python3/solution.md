# BIT + SortedList, reverse temporal order

**Author:** chuan-chih
**Votes:** 14
**Link:** [https://leetcode.com/problems/block-placement-queries/solutions/5207135/](https://leetcode.com/problems/block-placement-queries/solutions/5207135/)

---

# Intuition
Keep track of the intervals in `SortedList` and use BIT to query for the largest gap length.

# Approach
You can't reverse `max()` operations. However, if you go back in time, the gaps only get larger and larger so BIT is sufficient. For type 2 query, query the largest gap length up to the last obstacle `before` and just check whether that or `x - before >= sz`.

# Complexity
- Time complexity:
$$O(n\\log n)$$

- Space complexity:
$$O(n)$$

# Code
```python
class BIT:
    def __init__(self, n):
        self.n = n
        self.l = [0] * (n + 1)
    def add(self, i, x):
        i += 1
        while i <= self.n:
            self.l[i] = max(x, self.l[i])
            i += i & -i
    def query(self, i):
        i += 1
        ans = 0
        while i:
            ans = max(ans, self.l[i])
            i -= i & -i
        return ans

from sortedcontainers import SortedList
    
class Solution:
    def getResults(self, queries: List[List[int]]) -> List[bool]:
        sl = SortedList()
        n = min(5 * 10 ** 4, len(queries) * 3)
        sl.add(0)
        sl.add(n)
        
        ans = []
        for q in queries:
            if q[0] == 1:
                x = q[1]
                sl.add(x)
        
        bit = BIT(n + 1)
        for x, y in pairwise(sl):
            bit.add(y, y - x)
        
        for q in reversed(queries):
            if q[0] == 1:
                x = q[1]
                index = sl.index(x)
                after = sl[index + 1]
                before = sl[index - 1]
                sl.remove(x)
                bit.add(after, after - before)
            else:
                _, x, sz = q
                index = sl.bisect_right(x)
                before = sl[index - 1]
                ans.append(bit.query(before) >= sz or (x - before) >= sz)
            
        ans.reverse()
        return ans
```

# Addendum
It turned out that by going backward in time, we can use the fact that gaps get larger and larger *and* we only care about gaps larger than all gaps to the left ("monotonic stack"-like) and also use `SortedList` to keep track of gap length. We need to update from the middle of `gap` and the time complexity is still $$O(n\\log n)$$, but now we don't need to implement our own BIT or segment tree.

```python
from sortedcontainers import SortedList
    
class Solution:
    def getResults(self, queries: List[List[int]]) -> List[bool]:
        sl = SortedList()
        n = min(5 * 10 ** 4, len(queries) * 3)
        sl.add(0)
        sl.add(n)
        
        ans = []
        for q in queries:
            if q[0] == 1:
                x = q[1]
                sl.add(x)
        gap = SortedList()
        gap.add((0, 0))
        curr = 0
        for x, y in pairwise(sl):
            if (g := y - x) > curr:
                gap.add((y, g))
                curr = g
        
        for q in reversed(queries):
            if q[0] == 1:
                x = q[1]
                index = sl.index(x)
                after = sl[index + 1]
                before = sl[index - 1]
                sl.remove(x)
                g = after - before
                index = gap.bisect_left((x, 0))
                while index < len(gap) and gap[index][1] <= g:
                    gap.pop(index)
                if gap[index - 1][1] < g:
                    gap.add((after, g))
            else:
                _, x, sz = q
                index = sl.bisect_right(x)
                before = sl[index - 1]
                index = gap.bisect_right((before, math.inf)) - 1
                ans.append((x - before) >= sz or gap[index][1] >= sz)
            
        ans.reverse()
        return ans
```