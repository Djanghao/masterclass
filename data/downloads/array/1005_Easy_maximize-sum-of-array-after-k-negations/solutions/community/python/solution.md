# Python straightforward & self-explanatory & concise

**Author:** cenkay
**Votes:** 46
**Link:** [https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/252596/](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/252596/)

---

```
class Solution:
    def largestSumAfterKNegations(self, A: List[int], K: int) -> int:
        heapq.heapify(A)
        for _ in range(K):
            heapq.heappush(A, -heapq.heappop(A))
        return sum(A)
```