# [Python] heapq

**Author:** pbelskiy
**Votes:** 1
**Link:** [https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4884284/](https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4884284/)

---

```python
class Solution:
    def unmarkedSumArray(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        s = 0
        h = []
        m = set()

        for i in range(len(nums)):
            s += nums[i]
            heappush(h, (nums[i], i))

        a = []
        for i, k in queries:
            if i not in m:
                m.add(i)
                s -= nums[i]

            while h and k > 0:
                _, i = heappop(h)
                if i not in m:
                    m.add(i)
                    s -= nums[i]
                    k -= 1

            a.append(s)

        return a
```