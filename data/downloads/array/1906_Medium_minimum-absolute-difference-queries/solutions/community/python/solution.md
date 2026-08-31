# [Python] Handy counter! (easy 11 lines)

**Author:** m-Just
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/1290129/](https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/1290129/)

---

```python
def minDifference(self, nums: List[int], queries: List[List[int]]) -> List[int]:
    counters = [Counter()]
    for n in nums:
        counters.append(Counter(counters[-1]))
        counters[-1][n] += 1

    ans = []
    for l, r in queries:
        a, m = float('inf'), float('-inf')
        for n in sorted(counters[r+1] - counters[l]):
            a, m = min(a, n - m), n
        ans.append(a if a < float('inf') else -1)
    return ans
```
Vote up if you find this helpful, thanks!