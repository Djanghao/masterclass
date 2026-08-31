# Python - Dictionary

**Author:** ajith6198
**Votes:** 10
**Link:** [https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/1458383/](https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/1458383/)

---

```
class Solution:
    def interchangeableRectangles(self, rectangles: List[List[int]]) -> int:
        ratios = defaultdict(int)
        for x, y in rectangles:
            ratios[x/y] += 1
        res = 0
        for val in ratios.values():
            res += (val*(val-1)//2)
        return res
```

I thought of this as an union-find question at first and then understood it's a hashing problem