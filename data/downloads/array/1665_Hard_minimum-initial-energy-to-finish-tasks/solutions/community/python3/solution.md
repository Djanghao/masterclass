# Python 3 | Sort + Greedy & Sort + Binary Search | Explanation

**Author:** idontknoooo
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/944714/](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/944714/)

---

### Approach \\#1 - Binary Search
- Sort by difference
- Use binary search validate if given input (energy) can finish all works
- Search the smallest possible (like `bisect_left`)
```
class Solution:
    def minimumEffort(self, tasks: List[List[int]]) -> int:
        tasks.sort(key=lambda x: x[0]-x[1])
        def ok(mid):
            for actual, minimum in tasks:
                if minimum > mid or actual > mid: return False
                if minimum <= mid: mid -= actual
            return True
        l, r = 0, 10 ** 9
        while l <= r:
            mid = (l+r) // 2
            if ok(mid): r = mid - 1
            else: l = mid + 1
        return l
```

### Approach \\#2 - Greedy
- Sort by difference
- `cur`: actual cost, `ans` adjust by `minimum` so that it can start for all works
```
class Solution:
    def minimumEffort(self, tasks: List[List[int]]) -> int:
        tasks.sort(key=lambda x: x[0]-x[1])
        ans = cur = 0
        for cost, minimum in tasks:
            ans = min(cur-minimum, ans)
            cur -= cost
        return -ans
```