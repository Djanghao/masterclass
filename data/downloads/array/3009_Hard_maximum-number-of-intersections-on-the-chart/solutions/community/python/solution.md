# Python 3 || No 0.5 Shift, Two Edge Cases, 100%

**Author:** zsq007
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-intersections-on-the-chart/solutions/4975030/](https://leetcode.com/problems/maximum-number-of-intersections-on-the-chart/solutions/4975030/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. To make it faster, we only record the local min/max points in the hashmap.
2. For `y[0]` and `y[-1]`, there are only two kinds of edge cases we need to care about, in which the number of cross points on `line == y[0] == y[-1]` (transitional states) might be larger than that above or under.

a. `y[1] < y[0] == y[-1] < y[-2]` or `y[1] > y[0] == y[-1] > y[-2]`, e.g., `[2,3,1,2]` or `[2,1,3,2]`.

b. `y[0] == y[-1]` and `y[0] < y[1]` and `y[-1] < y[-2]` and `axis[y[0]] == 0`, e.g., `[2,3,1,2,1,3,2]`. In this case, the transitional state may increase by 1.

The regular linesweep can handle all other general cases.

# Complexity
- Time complexity: $O(\	ext{sort})$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def maxIntersectionCount(self, y: List[int]) -> int:
        axis, res, cur, edge = defaultdict(int), 0, 0, 0
        for x in range(1,len(y)-1):
            if y[x-1] < y[x] > y[x+1]:      axis[y[x]] -= 2
            elif y[x-1] > y[x] < y[x+1]:    axis[y[x]] += 2

        axis[y[0]] += 1 if y[0] < y[1] else -1
        axis[y[-1]] += 1 if y[-1] < y[-2] else -1
        if y[0] == y[-1]:
            if (y[0] < y[1]) ^ (y[-1] < y[-2]):
                edge = 1
            elif y[0] < y[1] and not axis[y[0]]:
                edge = 2
        
        for line in sorted(axis):
            if line == y[0]:
                if edge == 1:
                    cur += (axis[line]>>1)+1
                    if res < cur:   res = cur
                    cur += (axis[line]>>1)-1
                    continue
                elif edge == 2:
                    if res < cur+1:   res = cur+1
                    continue
            cur += axis[line]
            if res < cur:   res = cur
            
        return res
```