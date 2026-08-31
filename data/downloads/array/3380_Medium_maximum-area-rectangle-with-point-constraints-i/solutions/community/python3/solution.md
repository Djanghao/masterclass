# Simple and Straight forward

**Author:** tylerdurdn
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/solutions/6124552/](https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/solutions/6124552/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^3)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```python3 []
class Solution:
    def maxRectangleArea(self, points: List[List[int]]) -> int:
        n, points_set, res = len(points), set(map(tuple, points)), -1
        def helper(x1, x2, y1, y2):
            for x, y in points:
                if (x,y) in [(x1,y1),(x1,y2),(x2,y1),(x2,y2)]:
                    continue
                if x1 <= x <= x2 and y1 <= y <= y2:
                    return True
            return False
        for i in range(n):
            for j in range(i+1, n):
                (x1, y1), (x2, y2) = points[i], points[j]
                if x1 != x2 and y1 != y2:
                    if (x1, y2) in points_set and (x2, y1) in points_set:
                        x1, x2 = min(x1,x2), max(x1,x2)
                        y1, y2 = min(y1,y2), max(y1,y2)
                        if not helper(x1,x2,y1,y2):
                            area = abs(x2-x1)*abs(y2-y1)
                            res = max(res, area)
        return res
```