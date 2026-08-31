# [Python 3] Find ranges x->y and return formatted result || beats 97% || 27ms

**Author:** yourick
**Votes:** 113
**Link:** [https://leetcode.com/problems/summary-ranges/solutions/3627121/](https://leetcode.com/problems/summary-ranges/solutions/3627121/)

---

```
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        ranges = [] # [start, end] or [x, y]
        for n in nums:
            if ranges and ranges[-1][1] == n-1:
                ranges[-1][1] = n
            else:
                ranges.append([n, n])

        return [f'{x}->{y}' if x != y else f'{x}' for x, y in ranges]
```
![Screenshot 2023-10-12 at 20.21.39.png](./images/0.png)
