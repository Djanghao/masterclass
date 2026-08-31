# Python and Go

**Author:** hong_zhao
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2955475/](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2955475/)

---

```python
class Solution:
    def maximumBags(self, capacity: List[int], rocks: List[int], additionalRocks: int) -> int:
        diff = [capacity[i] - rocks[i] for i in range(len(rocks))]
        heapify(diff)
        bags = 0
        while diff and additionalRocks >= diff[0]:
            additionalRocks -= heappop(diff)
            bags += 1
        return bags
```
```go
func maximumBags(capacity []int, rocks []int, additionalRocks int) int {
    for i := range rocks {
        capacity[i] -= rocks[i]
    }
    sort.Ints(capacity)
    i := 0
    for i < len(capacity) && additionalRocks >= capacity[i] {
        additionalRocks -= capacity[i]
        i += 1
    }
    return i
}
```