# Python | Make two subsets and distribute

**Author:** aayushisingh1703
**Votes:** 10
**Link:** [https://leetcode.com/problems/last-stone-weight-ii/solutions/1616167/](https://leetcode.com/problems/last-stone-weight-ii/solutions/1616167/)

---

I looked at each element and added it either to subset 1 ```s1``` or subset 2 ```s2```.
When the array was exhausted, I return the absolute difference between the two.
The function that called the base-case-hitting function chooses the minimum.

```
class Solution:
    def lastStoneWeightII(self, stones: List[int]) -> int:
        @lru_cache(None)
        def recurse(idx, s1, s2):
            if idx == len(stones):
                return abs(s1 - s2)
            a = recurse(idx + 1, s1 + stones[idx], s2)
            b = recurse(idx + 1, s1, s2 + stones[idx])
            return min(a, b)
        return recurse(0, 0, 0)
```