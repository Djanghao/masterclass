# ✅98.44%🔥3 line code🔥

**Author:** marmokcsgo004
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-to-repair-cars/solutions/4098186/](https://leetcode.com/problems/minimum-time-to-repair-cars/solutions/4098186/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def repairCars(self, ranks: List[int], cars: int) -> int:
        
        arr = range(cars*cars * max(ranks))

        f = lambda t: sum(isqrt(t//r) for r in ranks)

        return  bisect_left(arr,cars, key = lambda t: f(t))
```