# [Python 3] Binary Search - mlog(n) - easy to understand

**Author:** dolong2110
**Votes:** 3
**Link:** [https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/solutions/3310487/](https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/solutions/3310487/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
binary search the value of median in range [1, 10**6]
for each value of search, try to find all value smaller and equal than the current search value -> it can be done by m(logn)

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$mlog(n) * log(10**6)$$ ~ $$mlog(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def matrixMedian(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        median = m * n // 2 + 1
        
        def helper(val: int) -> int:
            cnt = 0
            for row in grid:
                l, r = 0, n - 1
                while l <= r:
                    mid = (l + r) >> 1
                    if row[mid] > val:
                        r = mid - 1
                    else:
                        l = mid + 1
                cnt += l
            return cnt >= median

        l, r = 1, 10 ** 6
        while l <= r:
            mid = (l + r) >> 1
            if helper(mid):
                r = mid - 1
            else:
                l = mid + 1
        return l
```