# Python 3 | Heap | Explanation

**Author:** idontknoooo
**Votes:** 10
**Link:** [https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/1390561/](https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/1390561/)

---

### Explanation
- Always pick the maximum number to reduce
- Use a max-heap to help
### Implementation
```
class Solution:
    def minStoneSum(self, piles: List[int], k: int) -> int:
        heap = [-p for p in piles]
        heapq.heapify(heap)
        for _ in range(k):
            cur = -heapq.heappop(heap)
            heapq.heappush(heap, -(cur-cur//2))
        return -sum(heap)            
```